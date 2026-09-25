#!/usr/bin/env tsx
/**
 * Verification for the hexagram table — the half of opencosmos's
 * `pnpm xenso:check-iching` that tests this repository rather than the app.
 *
 *   npm run check
 *
 * It reads the frontmatter, which is the source of truth, not the generated
 * file — and then checks the generated file agrees with it, so the copy the
 * app carries cannot drift from the decisions without this failing.
 *
 * The King Wen sequence has a structural invariant that makes the table
 * self-checking: consecutive pairs (1,2), (3,4) … (63,64) are each other's
 * inversions — the same figure turned upside down — except for the eight
 * figures that are their own inversion, which pair by complement instead. A
 * single transposed row breaks it. That check is worth more than proofreading.
 *
 * The cast engine — coin arithmetic, the non-uniform odds, random casts — is
 * not here. It lives in opencosmos at lib/iching.ts, and so does its
 * check. What is here of the founding cast is the part that is a fact about
 * the table: which figure those six lines spell, and which number it has.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { load } from 'js-yaml'
import { signatureOf, type Pole } from './signature'
import { HEXAGRAMS as GEN_HEXAGRAMS, TRIGRAMS as GEN_TRIGRAMS, HEXAGRAM_BY_FIGURE } from '../generated/iching-data'

const ROOT = resolve(__dirname, '..')

let failures = 0
const fail = (m: string) => {
  console.log(`  ✗ ${m}`)
  failures++
}
const pass = (m: string) => console.log(`  ✓ ${m}`)

type Row = Record<string, unknown>

function frontmatter(text: string): Row {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)
  if (!m) throw new Error('no frontmatter')
  return (load(m[1]) ?? {}) as Row
}

/** Each file's frontmatter, with the path it came from, for messages that name it. */
function readNamed(dir: string): [string, Row][] {
  const path = join(ROOT, dir)
  return readdirSync(path)
    .filter(f => f.endsWith('.md') && f !== 'README.md')
    .sort()
    .map(f => {
      try {
        return [`${dir}/${f}`, frontmatter(readFileSync(join(path, f), 'utf8'))]
      } catch (e) {
        throw new Error(`${dir}/${f}: ${(e as Error).message}`)
      }
    })
}

const read = (dir: string): Row[] => readNamed(dir).map(([, row]) => row)

type Hex = { number: number; chinese: string; figure: string; lower: string; upper: string; signature: unknown; render: unknown; status: unknown }
type Tri = { id: string; chinese: string; figure: string; image: string; spectrum: string; pole: string; oddLine: string | null }

const hexagrams: Hex[] = read('hexagrams')
  .map(h => {
    const t = (h.trigrams ?? {}) as { lower?: string; upper?: string }
    return {
      number: Number(h.number),
      chinese: String(h.chinese),
      figure: String(h.lines),
      lower: String(t.lower),
      upper: String(t.upper),
      signature: h.signature,
      render: h.render,
      status: h.status,
    }
  })
  .sort((a, b) => a.number - b.number)
const trigrams: Tri[] = read('trigrams').map(t => ({
  id: String(t.id),
  chinese: String(t.chinese),
  figure: String(t.lines),
  image: String(t.image_chinese),
  spectrum: String(t.spectrum),
  pole: String(t.pole),
  oddLine: t.odd_line == null ? null : String(t.odd_line),
}))

const invert = (s: string) => [...s].reverse().join('')
const complement = (s: string) => [...s].map(c => (c === '1' ? '0' : '1')).join('')
const byFigure = new Map(hexagrams.map(h => [h.figure, h.number]))

console.log('\nhexagram table')

// Numbering: 1 … 64, each once.
{
  const bad = hexagrams.filter((h, i) => h.number !== i + 1)
  if (hexagrams.length !== 64) fail(`expected 64 hexagrams, got ${hexagrams.length}`)
  else if (bad.length) fail(`King Wen numbering is not 1 … 64: ${bad.map(h => h.number).join(', ')}`)
  else pass('64 hexagrams, numbered 1 … 64 once each')
}

// Bijection: 64 rows, all distinct, covering every six-line figure.
{
  const malformed = hexagrams.filter(h => !/^[01]{6}$/.test(h.figure))
  const figures = new Set(hexagrams.map(h => h.figure))
  if (malformed.length) fail(`malformed figures: ${malformed.map(h => `${h.number}="${h.figure}"`).join(', ')}`)
  else if (figures.size !== 64) fail(`figures are not distinct: ${figures.size} unique`)
  else {
    const missing = Array.from({ length: 64 }, (_, n) => n.toString(2).padStart(6, '0')).filter(b => !figures.has(b))
    if (missing.length) fail(`figures absent from the sequence: ${missing.join(', ')}`)
    else pass('64 distinct figures, covering all 64 — bijection holds')
  }
}

// The King Wen pair invariant.
{
  let bad = 0
  const selfInverse: number[] = []
  for (let k = 0; k < 32 && 2 * k + 1 < hexagrams.length; k++) {
    const a = hexagrams[2 * k]
    const b = hexagrams[2 * k + 1]
    if (invert(a.figure) === a.figure) {
      selfInverse.push(a.number, b.number)
      if (complement(a.figure) !== b.figure) {
        fail(`pair ${a.number}/${b.number} (${a.chinese}/${b.chinese}): self-inverse but not complements`)
        bad++
      }
    } else if (invert(a.figure) !== b.figure) {
      fail(`pair ${a.number}/${b.number} (${a.chinese}/${b.chinese}): ${a.figure} inverts to ${invert(a.figure)}, not ${b.figure}`)
      bad++
    }
  }
  const expected = '1,2,27,28,29,30,61,62'
  if (selfInverse.join() !== expected) fail(`self-inverse set is ${selfInverse.join()}, expected ${expected}`)
  else if (!bad) pass('all 32 King Wen pairs invert or complement; the 8 self-inverse figures are the known ones')
}

console.log('\ntrigrams')

// The eight trigrams: distinct, covering all eight three-line figures.
{
  const figures = new Set(trigrams.map(t => t.figure))
  const ids = new Set(trigrams.map(t => t.id))
  if (trigrams.length !== 8) fail(`expected 8 trigrams, got ${trigrams.length}`)
  else if (figures.size !== 8 || ![...figures].every(f => /^[01]{3}$/.test(f))) fail(`trigram figures are not the 8 distinct three-line figures: ${[...figures].join(', ')}`)
  else if (ids.size !== 8) fail(`trigram ids are not distinct: ${[...ids].join(', ')}`)
  else pass('8 distinct trigrams, covering all 8 three-line figures')
}

// Trigram decomposition agrees with the figure.
{
  const tri = new Map(trigrams.map(t => [t.id, t]))
  let bad = 0
  for (const h of hexagrams) {
    const lower = tri.get(h.lower)
    const upper = tri.get(h.upper)
    if (!lower || !upper) {
      fail(`hexagram ${h.number} ${h.chinese}: names a trigram that does not exist (${h.lower}, ${h.upper})`)
      bad++
    } else if (lower.figure + upper.figure !== h.figure) {
      fail(`hexagram ${h.number} ${h.chinese}: trigrams ${lower.id} ${lower.figure} + ${upper.id} ${upper.figure} ≠ ${h.figure}`)
      bad++
    }
  }
  if (!bad) pass("every hexagram's trigrams concatenate to its figure, lower first")
}

console.log('\nthe four spectrums')

/**
 * The eight trigrams are four pairs, and the pairing is stated by the text three
 * times over: 說卦 ch 3 pairs the images (天地定位，山澤通氣，雷風相薄，水火不相射), ch 7
 * the actions, and ch 10 names each child by the draw its odd line came from — 一索,
 * 再索, 三索, the bottom, middle and top line. Each pair is two complements with
 * their odd line at the same height, and a trigram's pole is the kind of that line
 * (繫辭下 陽卦多陰…陽卦奇). So the fields in trigrams/ are derivable from the figure,
 * and are derived here rather than trusted. hexagram-names.md § The pattern in the
 * formation has the argument.
 */
{
  const heights = ['bottom', 'middle', 'top'] as const
  const oddOf = (f: string) => {
    const ones = [...f].filter(c => c === '1').length
    if (ones === 0 || ones === 3) return { line: null, pole: ones === 3 ? 'yang' : 'yin' }
    const minority = ones === 1 ? '1' : '0'
    return { line: heights[f.indexOf(minority)], pole: minority === '1' ? 'yang' : 'yin' }
  }
  let bad = 0
  for (const t of trigrams) {
    const want = oddOf(t.figure)
    if (t.oddLine !== want.line || t.pole !== want.pole) {
      fail(`trigram ${t.id} ${t.figure}: says odd line ${t.oddLine}, pole ${t.pole}; the figure says ${want.line}, ${want.pole}`)
      bad++
    }
  }
  if (!bad) pass("every trigram's pole and odd line are the ones its figure has")

  const bySpectrum = new Map<string, Tri[]>()
  for (const t of trigrams) bySpectrum.set(t.spectrum, [...(bySpectrum.get(t.spectrum) ?? []), t])
  const pairsBad: string[] = []
  for (const [name, members] of bySpectrum) {
    const [a, b] = members
    if (members.length !== 2) pairsBad.push(`${name} has ${members.length} members`)
    else if (complement(a.figure) !== b.figure) pairsBad.push(`${name}: ${a.figure} and ${b.figure} are not complements`)
    else if (a.pole === b.pole) pairsBad.push(`${name}: both poles are ${a.pole}`)
    else if (a.oddLine !== b.oddLine) pairsBad.push(`${name}: odd lines at ${a.oddLine} and ${b.oddLine}`)
    else {
      const [yang, yin] = a.pole === 'yang' ? [a, b] : [b, a]
      if (name !== `${yang.id}-${yin.id}`) pairsBad.push(`${name} should be named ${yang.id}-${yin.id}, yang first`)
    }
  }
  if (bySpectrum.size !== 4) pairsBad.push(`${bySpectrum.size} spectrums, expected 4`)
  if (pairsBad.length) pairsBad.forEach(fail)
  else pass('4 spectrums, each two complements, one yang and one yin, with the odd line at the same height')

  // Against the text: 說卦 ch 3's four pairs of images must be the four spectrums.
  const shuogua = readFileSync(join(ROOT, 'sources', 'wings', 'shuogua.md'), 'utf8')
  const ch3 = /天地定位，山澤通氣，雷風相薄，水火不相射/.exec(shuogua)
  if (!ch3) fail('說卦 ch 3 (天地定位…水火不相射) not found in sources/wings/shuogua.md')
  else {
    const textPairs = ['天地', '山澤', '雷風', '水火'].map(p => [...p].sort().join(''))
    const ours = [...bySpectrum.values()].map(m => m.map(t => t.image).sort().join(''))
    const missing = textPairs.filter(p => !ours.includes(p))
    if (missing.length) fail(`說卦 ch 3 pairs ${missing.join(', ')}, which no spectrum does`)
    else pass('the spectrums are 說卦 ch 3\'s four pairs of images: 天地 山澤 雷風 水火')
  }

  // The three classes, and the frame they make in the received order.
  const tri = new Map(trigrams.map(t => [t.id, t]))
  const doubled: number[] = []
  const crossed: number[] = []
  for (const h of hexagrams) {
    const lo = tri.get(h.lower)
    const up = tri.get(h.upper)
    if (!lo || !up || lo.spectrum !== up.spectrum) continue
    ;(lo.id === up.id ? doubled : crossed).push(h.number)
  }
  const across = 64 - doubled.length - crossed.length
  if (doubled.join() !== '1,2,29,30,51,52,57,58' || crossed.join() !== '11,12,31,32,41,42,63,64' || across !== 48)
    fail(`classes are doubled ${doubled.join()}, crossed ${crossed.join()}, ${across} across two — expected 1,2,29,30,51,52,57,58 · 11,12,31,32,41,42,63,64 · 48`)
  else pass('8 doubled, 8 crossed on one spectrum, 48 across two')

  const spectrumOf = (n: number) => tri.get(hexagrams[n - 1].lower)?.spectrum
  const frame = [
    [1, doubled.includes(1) && doubled.includes(2) && spectrumOf(1) === 'qian-kun', 'the upper canon opens with sky and earth doubled'],
    [29, doubled.includes(29) && doubled.includes(30) && spectrumOf(29) === 'kan-li', 'and closes with water and fire doubled'],
    [31, crossed.includes(31) && crossed.includes(32), 'the lower canon opens crossed'],
    [63, crossed.includes(63) && crossed.includes(64) && spectrumOf(63) === 'kan-li', 'and closes with water and fire crossed'],
  ] as const
  const frameBad = frame.filter(([, ok]) => !ok)
  const skyEarth = [...doubled, ...crossed].filter(n => spectrumOf(n) === 'qian-kun')
  const lowerOnly = [...doubled, ...crossed].filter(n => ['zhen-xun', 'gen-dui'].includes(spectrumOf(n) ?? ''))
  if (frameBad.length) frameBad.forEach(([n, , m]) => fail(`canon frame: ${m} — fails at ${n}`))
  else if (!skyEarth.every(n => n <= 30) || !lowerOnly.every(n => n > 30))
    fail(`canon frame: sky ↔ earth at ${skyEarth.join()}, thunder ↔ wind and mountain ↔ lake at ${lowerOnly.join()}`)
  else pass('the sixteen single-spectrum hexagrams frame both canons: 1/2 · 29/30 above, 31/32 · 63/64 below')

  // Each hexagram file carries its signature for a reader. It is a copy, and the
  // derivation from the trigram data is what it must equal.
  const sigBad: string[] = []
  for (const h of hexagrams) {
    const lo = tri.get(h.lower)
    const up = tri.get(h.upper)
    if (!lo || !up) continue
    const want = JSON.stringify(signatureOf({ ...lo, pole: lo.pole as Pole }, { ...up, pole: up.pole as Pole }))
    const g = h.signature as { class?: unknown; within?: { spectrum?: unknown; pole?: unknown }; without?: { spectrum?: unknown; pole?: unknown } } | null | undefined
    // Field by field, so a hand-reordered mapping in the file is not a failure.
    const got = g == null ? null : JSON.stringify({ class: g.class, within: { spectrum: g.within?.spectrum, pole: g.within?.pole }, without: { spectrum: g.without?.spectrum, pole: g.without?.pole } })
    if (got === null) sigBad.push(`${h.number} ${h.chinese} has no signature`)
    else if (got !== want) sigBad.push(`${h.number} ${h.chinese} says ${got}, its trigrams give ${want}`)
  }
  if (sigBad.length) fail(`hexagram signatures disagree with their trigrams: ${sigBad.slice(0, 6).join('; ')}${sigBad.length > 6 ? ` … ${sigBad.length} in all` : ''}`)
  else pass("every hexagram's signature is the one its trigrams give")
}

console.log('\nfixture — the founding cast')

/**
 * xenso/source/Wisdom of the Universe/I Ching …md — 2024-02-23,
 * "What will help bring Xenso into the world?"
 *
 * The throws, as logged, give lines 9 7 8 8 7 8, bottom first — that step is
 * coin arithmetic and is checked with the engine in opencosmos. What the table
 * owes is the rest: those lines spell 110010, which is 60; the old yang at the
 * bottom changes, giving 010010, which is 29. Read top-down they would spell
 * 010011 — 59, a plausible wrong answer that would never raise an error.
 */
{
  const lines = [9, 7, 8, 8, 7, 8]
  const figure = lines.map(v => String(v % 2)).join('')
  const relating = lines.map(v => (v === 9 ? '0' : v === 6 ? '1' : String(v % 2))).join('')
  const primary = byFigure.get(figure)
  const becoming = byFigure.get(relating)
  const reversed = byFigure.get(invert(figure))
  console.log(`    lines ${lines.join(' ')} → ${figure} · ${primary}, moving at line 1 → ${relating} · ${becoming}`)
  if (primary !== 60) fail(`${figure} should be hexagram 60, the table says ${primary}`)
  if (becoming !== 29) fail(`${relating} should be hexagram 29, the table says ${becoming}`)
  if (primary === 60 && becoming === 29) pass('matches the hand calculation: 60 becoming 29')
  if (reversed === primary) fail('reading the lines top-down gives the same answer — the direction guard is not testing anything')
  else if (reversed !== 59) fail(`read top-down it should be 59, the table says ${reversed}`)
  else pass('read top-down it would be 59 instead of 60 — bottom-up matters, and is enforced')
}

console.log('\nrenderings')
{
  const locked = hexagrams.filter(h => h.status === 'locked')
  const orphaned = locked.filter(h => !h.render)
  console.log(`  ${locked.length} of 64 renderings locked, ${64 - locked.length} not`)
  if (orphaned.length) fail(`locked but with no render: ${orphaned.map(h => h.number).join(', ')}`)
  else pass('no hexagram is locked without a render')
}

// The rendering is data in trigrams/ and hexagrams/; its argument is an entry in
// glossary/. The two are joined by `glossary_refs:`, and nothing held the join.
const named = [...readNamed('trigrams'), ...readNamed('hexagrams')]
const glossaryEntry = new Map<string, Row>()

console.log('\nglossary references')
{
  const dangling: string[] = []
  const disagree: string[] = []
  let refs = 0
  for (const [file, fm] of named) {
    for (const ref of (fm.glossary_refs as string[] | undefined) ?? []) {
      refs++
      const path = join(ROOT, 'glossary', `${ref}.md`)
      if (!existsSync(path)) {
        dangling.push(`${file} → glossary/${ref}.md`)
        continue
      }
      const entry = frontmatter(readFileSync(path, 'utf8'))
      glossaryEntry.set(ref, entry)
      if (fm.render != null && String(entry.render) !== String(fm.render))
        disagree.push(`${file} renders "${fm.render}", glossary/${ref}.md rules "${entry.render}"`)
    }
  }
  if (dangling.length) fail(`glossary_refs naming no entry: ${dangling.join('; ')}`)
  else pass(`${refs} glossary_refs, every one resolving to an entry`)
  if (disagree.length) fail(`rendering and ruling disagree: ${disagree.join('; ')}`)
  else pass('every rendering matches the entry that argues it')
}

// The parent project's locks bind here unchanged, and until now were enforced
// by reading. The rules are its tools/check_locks.py's, so a word is judged the
// same way in both books:
//   - substring, so "eternally" cannot hide from "eternal";
//   - a forbidden string written with a capital is matched with its case, because
//     the capital *is* the violation ("the Way", not "the way of it");
//   - a lock's word is an error only where the lock's character is in this
//     hexagram's own Chinese. Elsewhere it is likely an ordinary English word,
//     and is reported without failing.
// One rule is not carried over: a capital at the start of a sentence is not
// excused, because a `render:` is a name, not a sentence.
// The entry's own `forbidden:`, and its glossary entry's, bind without the gate.
console.log('\nlocks')
{
  type Lock = { term: string; pinyin: string; render: string; forbidden: string[] }
  const locks = load(readFileSync(join(ROOT, 'sources', 'locks', 'terms.yaml'), 'utf8')) as Lock[]
  const cased = (needle: string) => /\p{Lu}/u.test(needle)
  const found = (text: string, needle: string) =>
    cased(needle) ? text.includes(needle) : text.toLowerCase().includes(needle.toLowerCase())
  /** Every English string a file carries, whatever shape the field takes. */
  const english = (v: unknown): string[] =>
    v == null ? [] : typeof v === 'string' ? [v] : Array.isArray(v) ? v.flatMap(english) : typeof v === 'object' ? Object.values(v).flatMap(english) : []

  const breaches: string[] = []
  const notes: string[] = []
  let checked = 0
  for (const [file, fm] of named) {
    const text = ['render', 'judgment', 'image', 'line_texts'].flatMap(k => english(fm[k])).join('\n')
    if (!text) continue
    checked++
    const n = fm.number == null ? null : String(fm.number).padStart(2, '0')
    const zhouyi = n ? join(ROOT, 'sources', 'zhouyi', `${n}.md`) : null
    const chinese = [fm.chinese, fm.image_chinese].join('') + (zhouyi && existsSync(zhouyi) ? readFileSync(zhouyi, 'utf8') : '')

    const own = [
      ...((fm.forbidden as string[] | undefined) ?? []),
      ...((fm.glossary_refs as string[] | undefined) ?? []).flatMap(r => (glossaryEntry.get(r)?.forbidden as string[] | undefined) ?? []),
    ]
    for (const needle of new Set(own)) if (found(text, needle)) breaches.push(`${file}: "${needle}" is in its own forbidden list`)

    for (const lock of locks) {
      const chars = lock.term.split('&').map(c => c.trim()).filter(Boolean)
      for (const needle of lock.forbidden) {
        if (!found(text, needle)) continue
        if (chars.some(c => chinese.includes(c)))
          breaches.push(`${file}: ${lock.term} (${lock.pinyin}) is in its Chinese, and "${needle}" is forbidden for it — render as: ${lock.render}`)
        else notes.push(`${file}: "${needle}" is forbidden for ${lock.term}, which is not in its Chinese — likely an ordinary English word`)
      }
    }
  }
  for (const note of notes) console.log(`  · ${note}`)
  if (breaches.length) breaches.forEach(fail)
  else pass(`${checked} rendered file(s) against their own forbidden lists and ${locks.length} locks — no breach`)
}

console.log('\ngenerated/iching-data.ts')

// The app's copy agrees with the decisions. If this fails, run `npm run build`.
{
  const drift: string[] = []
  const hexSrc = read('hexagrams').sort((a, b) => Number(a.number) - Number(b.number))
  if (GEN_HEXAGRAMS.length !== hexSrc.length) drift.push(`${GEN_HEXAGRAMS.length} hexagrams against ${hexSrc.length}`)
  hexSrc.forEach((h, i) => {
    const g = GEN_HEXAGRAMS[i]
    const t = h.trigrams as { lower: string; upper: string }
    const lo = trigrams.find(x => x.id === t.lower)
    const up = trigrams.find(x => x.id === t.upper)
    const sig = lo && up ? JSON.stringify(signatureOf({ ...lo, pole: lo.pole as Pole }, { ...up, pole: up.pole as Pole })) : null
    const want = [h.number, h.chinese, h.pinyin, h.lines, t.lower, t.upper, sig, h.render ?? null, h.status, h.judgment ?? null].map(v => (v == null || v === '' ? null : String(v)))
    const got = g ? [g.number, g.chinese, g.pinyin, g.figure, g.trigrams.lower, g.trigrams.upper, JSON.stringify(g.signature), g.render, g.status, g.judgment].map(v => (v == null ? null : String(v))) : []
    if (want.join('\u0000') !== got.join('\u0000')) drift.push(`hexagram ${h.number}`)
  })
  const triSrc = read('trigrams')
  if (GEN_TRIGRAMS.length !== triSrc.length) drift.push(`${GEN_TRIGRAMS.length} trigrams against ${triSrc.length}`)
  triSrc.forEach((t, i) => {
    const g = GEN_TRIGRAMS[i]
    const want = [t.id, t.chinese, t.pinyin, t.lines, t.image_chinese, t.spectrum, t.pole, t.odd_line ?? null, t.render ?? null, t.status].map(v => (v == null || v === '' ? null : String(v)))
    const got = g ? [g.id, g.chinese, g.pinyin, g.figure, g.imageChinese, g.spectrum, g.pole, g.oddLine, g.render, g.status].map(v => (v == null ? null : String(v))) : []
    if (want.join('\u0000') !== got.join('\u0000')) drift.push(`trigram ${t.id}`)
  })
  const lookupBad = hexagrams.filter(h => HEXAGRAM_BY_FIGURE[h.figure] !== h.number)
  if (lookupBad.length) drift.push(`figure lookup for ${lookupBad.map(h => h.number).join(', ')}`)
  if (drift.length) fail(`stale against the frontmatter — run \`npm run build\`: ${drift.slice(0, 8).join('; ')}${drift.length > 8 ? ` … ${drift.length} in all` : ''}`)
  else pass('agrees with the frontmatter, row for row')
}

console.log(failures === 0 ? '\n✓ all checks passed\n' : `\n✗ ${failures} failure(s)\n`)
process.exit(failures ? 1 : 0)
