/**
 * 說文解字 — the parser, ported from the Tao Te Ching project's
 * tools/import_shuowen.py so both books read Xu Shen the same way.
 *
 * The port is held to the original, not trusted to it: run over the Laozi's
 * characters it must reproduce that project's sources/shuowen/entries.md row
 * for row, and `npm run import-sources -- --only shuowen --verify-port` checks
 * exactly that. Every comment below that explains a trap is the original's,
 * because each one was paid for there.
 */

import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

// 說文 uses 从 throughout; the wider CJK range matters because seal-script era
// component graphs stray outside the BMP, and a narrow range deletes them
// silently. Every regex here carries the `u` flag for the same reason: without
// it `.` and a character class see UTF-16 halves, not characters.
const CJK = '[㐀-鿿豈-﫿\\u{20000}-\\u{2ebef}]'
const CJK_ONE = new RegExp(`^${CJK}$`, 'u')
const CJK_ALL = new RegExp(CJK, 'gu')

export const VOLUMES = Array.from({ length: 14 }, (_, i) => String(i + 1).padStart(2, '0')) // 卷一 … 卷十四

export const volumeUrl = (vol: string) =>
  `https://zh.wikisource.org/w/index.php?title=${encodeURIComponent(`說文解字/${vol}`)}&action=raw`

/**
 * Orthographic variants — glyph forms of the same word, for matching only; the
 * vendored text keeps its glyph. The Tao Te Ching project's lib/corpus.py
 * ORTHOGRAPHIC, verbatim.
 */
const ORTHOGRAPHIC: Record<string, string> = {
  '徳': '德', '强': '強', '争': '爭', '𤣥': '玄', '衆': '眾', '静': '靜',
  '髙': '高', '盗': '盜', '徃': '往', '逺': '遠', '兊': '兌', '竒': '奇',
  '虚': '虛', '緜': '綿', '乗': '乘', '㣲': '微', '舍': '捨', '饑': '飢',
  '巳': '已', '絶': '絕', '况': '況', '賔': '賓', '氾': '汎', '隐': '隱',
  '隂': '陰', '沒': '没', '寳': '寶', '刋': '刊', '㝠': '冥', '㫖': '旨',
  '劔': '劍', '隣': '鄰', '耶': '邪',
  '爲': '為', '乆': '久', '户': '戶', '奥': '奧', '愼': '慎', '剋': '克',
  '踈': '疏', '柰': '奈', '䘮': '喪', '𥙷': '補', '轝': '輿', '田': '畋',
  '晩': '晚', '牗': '牖',
}
export const fold = (s: string) =>
  (s.replace(/〔[^〕]*〕/gu, '').match(CJK_ALL) ?? []).map(c => ORTHOGRAPHIC[c] ?? c).join('')

/**
 * 說文 files some entries under the graph current c. 100 CE. Each pair was
 * verified in the parent project against the vendored text — the old form is an
 * entry and its definition is this character's word — never asserted from
 * memory. Anything unverified stays in the reported gap. Its SHUOWEN_VARIANTS,
 * verbatim; see that file for the definition that verified each.
 *
 * Deliberately NOT mapped there, and not here: 其 (箕), 云 (雲), 於 (烏), 求 (裘) —
 * a borrowed graph, whose entry defines another word — and 太.
 */
export const SHUOWEN_VARIANTS: Record<string, string> = {
  '明': '朙', '善': '譱', '真': '眞', '處': '処', '法': '灋',
  '並': '竝', '乘': '椉', '享': '亯', '以': '㠯', '侯': '矦', '偽': '僞', '兆': '𠧞',
  '全': '仝', '劍': '劒', '塵': '𪋻', '宜': '宐', '年': '秊', '弊': '獘', '彌': '镾',
  '既': '旣', '春': '萅', '智': '𥏼', '槁': '槀', '窮': '竆', '累': '纍', '耀': '燿',
  '脆': '膬', '舉': '擧', '蓋': '葢', '衛': '衞', '躁': '趮', '鎮': '鎭', '間': '閒',
  '隳': '隓', '飲': '㱃', '似': '佀', '孰': '𦏧', '戎': '𢦦', '肆': '𨽸', '兕': '𤉡',
  '傫': '儽', '鄉': '𨞰',
  '抱': '捊', '網': '网', '跡': '迹', '隣': '鄰', '域': '或', '學': '斆', '尊': '𢍜',
  '抑': '𢑏', '糞': '𡊄', '偷': '媮', '靈': '𩆜', '佐': '左', '孩': '咳', '恍': '怳',
  '惚': '忽',
}

/** Python's html.unescape, for what the transcription actually contains. */
function unescape(s: string): string {
  const named: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' }
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/giu, (m, e: string) => {
    if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10))
    return named[e.toLowerCase()] ?? m
  })
}

/**
 * Wikisource carries 說文 in two transcriptions. 卷一 is a wikitable with
 * `{{+|'''天'''}}` headwords, `{{yw|…}}` text and `{{*|…}}` annotations carrying
 * the 反切; 卷二–卷十四 are plain lines, `少：不多也。从小丿聲。`. Both are parsed.
 */
function* parseVolume(wikitext: string): Generator<[string, string | null, string, string]> {
  wikitext = unescape(wikitext)
  let section: string | null = null
  // Two equals followed by something that is not an equals — the parent's first
  // lookahead matched three, and left every character in 卷二–卷十四 with no 部.
  for (const chunk of wikitext.split(/\n(?===[^=])/u)) {
    const m = /^==\s*(.+?)部\s*==/u.exec(chunk)
    if (m) section = m[1].trim()

    for (const row of chunk.split('\n|-')) {
      const head = new RegExp(`\\{\\{\\+\\|'''(${CJK})'''\\}\\}`, 'u').exec(row)
      const yw = /\{\{yw\|([\s\S]+?)\}\}/u.exec(row)
      if (!(head && yw)) continue
      const cells = [...row.matchAll(new RegExp(`\\{\\{\\+\\|(${CJK})\\}\\}`, 'gu'))].map(x => x[1])
      const ann = /\{\{\*\|([\s\S]+?)\}\}/u.exec(row)
      yield [head[1], cells.length ? cells[cells.length - 1] : section, yw[1].trim(), ann ? ann[1].trim() : '']
    }

    for (const raw of chunk.split('\n')) {
      const line = unescape(raw).trim()
      const m2 = new RegExp(`^(${CJK})(?:（[^）]*）)?[：:](.+)$`, 'u').exec(line)
      if (m2) yield [m2[1], section, m2[2].trim(), '']
    }
  }
}

/** The 反切 spelling, e.g. 他前切 — Middle Chinese, and free by age. */
const fanqie = (annotation: string) => new RegExp(`((${CJK}){2}切)`, 'u').exec(annotation ?? '')?.[1] ?? ''

/** Python's str.rstrip(chars): drop any trailing run of the given characters. */
const rstrip = (s: string, chars: string) => {
  const a = [...s]
  while (a.length && chars.includes(a[a.length - 1])) a.pop()
  return a.join('')
}

/**
 * Split an entry into gloss, semantic parts, phonetic parts, and kind — from
 * Xu Shen's own formulas: 从X (semantic), X聲 (phonetic), 亦聲 (both), 省
 * (abbreviated). `凡X之屬皆从X` is a statement about a section's class, not about
 * this character, so it is stripped first — left in, every radical looks like a
 * compound of itself.
 */
export function parseAnalysis(text: string) {
  const head = /凡.{1,2}之屬皆从/u.test(text)
  const body = text.replace(/凡.{1,2}之屬皆从.{1,2}。?/gu, '')
  const m = /(从|從|象|闕)/u.exec(body)
  const gloss = (m ? body.slice(0, m.index) : body).trim()
  const analysis = m ? body.slice(m.index) : ''

  const semantic: string[] = []
  const phonetic: string[] = []
  // 聲 and 省 are grammar, not parts; and a numeric reference that survives
  // undecoded must not enter the list one ASCII digit at a time.
  const add = (target: string[], ch: string) => {
    if (ch && !target.includes(ch) && !'省聲亦从從'.includes(ch) && CJK_ONE.test(ch)) target.push(ch)
  }
  for (let clause of analysis.split(/[，。；、：]/u)) {
    clause = clause.trim()
    if (!clause) continue
    const m2 = new RegExp(`^(${CJK})省?亦?聲$`, 'u').exec(clause)
    if (m2) {
      add(phonetic, m2[1])
      continue
    }
    const m3 = new RegExp(`^[从從]((?:${CJK})+)$`, 'u').exec(clause)
    if (!m3) continue
    const chars = m3[1]
    if (chars.endsWith('聲')) {
      const core = [...rstrip(rstrip([...chars].slice(0, -1).join(''), '亦'), '省')]
      if (core.length) {
        add(phonetic, core[core.length - 1])
        for (const c of core.slice(0, -1)) add(semantic, c)
      }
    } else for (const c of rstrip(chars, '省')) add(semantic, c)
  }
  const kind = phonetic.length && semantic.length ? 'phonetic-compound'
    : phonetic.length ? 'phonetic-only'
    : semantic.length ? 'compound'
    : analysis.includes('象') ? 'pictograph' : 'unanalysed'
  return { gloss, semantic, phonetic, kind, sectionHead: head }
}

export type Hit = {
  char: string; headword: string; matchedBy: 'exact' | 'old-form' | 'orthographic'
  radical: string | null; definition: string; fanqie: string; volume: string
} & ReturnType<typeof parseAnalysis>

/** Python's sorted() on strings: by code point, which JS's default sort is not. */
export const byCodePoint = (a: string, b: string) => {
  const x = [...a].map(c => c.codePointAt(0)!)
  const y = [...b].map(c => c.codePointAt(0)!)
  for (let i = 0; i < Math.min(x.length, y.length); i++) if (x[i] !== y[i]) return x[i] - y[i]
  return x.length - y.length
}

/**
 * Parse the cached volumes and match every corpus character to its entry by
 * three routes, narrowest first: the graph itself, the orthographic fold, and
 * the verified old form. `headword` records which graph the entry is filed
 * under, so a reader is never told 明 has a definition it does not have.
 */
export function build(cacheDir: string, corpus: Set<string>) {
  const entries = new Map<string, { char: string; radical: string | null; definition: string; fanqie: string; volume: string }>()
  const missingVolumes: string[] = []
  for (const vol of VOLUMES) {
    const path = join(cacheDir, `${vol}.wikitext`)
    if (!existsSync(path)) {
      missingVolumes.push(vol)
      continue
    }
    for (const [char, radical, definition, annotation] of parseVolume(readFileSync(path, 'utf8'))) {
      if (!entries.has(char)) entries.set(char, { char, radical, definition, fanqie: fanqie(annotation), volume: vol })
    }
  }
  const folded = new Map<string, [string, typeof entries extends Map<string, infer V> ? V : never]>()
  for (const [c, e] of entries) {
    const f = fold(c) || c
    if (!folded.has(f)) folded.set(f, [c, e])
  }
  const hits = new Map<string, Hit>()
  for (const c of corpus) {
    let hit: Omit<Hit, keyof ReturnType<typeof parseAnalysis>> | null = null
    if (entries.has(c)) hit = { ...entries.get(c)!, char: c, headword: c, matchedBy: 'exact' }
    else if (SHUOWEN_VARIANTS[c] && entries.has(SHUOWEN_VARIANTS[c]))
      hit = { ...entries.get(SHUOWEN_VARIANTS[c])!, char: c, headword: SHUOWEN_VARIANTS[c], matchedBy: 'old-form' }
    else if (folded.has(c)) {
      const [headword, e] = folded.get(c)!
      hit = { ...e, char: c, headword, matchedBy: 'orthographic' }
    }
    if (hit) hits.set(c, { ...hit, ...parseAnalysis(hit.definition) })
  }
  const missing = [...corpus].filter(c => !hits.has(c)).sort(byCodePoint)
  return { entries, hits, missing, missingVolumes }
}

/** One table row, in the parent's column order. */
export const row = (e: Hit) =>
  `| ${e.char} | ${e.headword} | ${e.matchedBy} | ${e.radical ?? 'None'} | ${e.kind} | ${e.semantic.join('')} | ${e.phonetic.join('')} | ${e.fanqie} | ${e.definition} |`
