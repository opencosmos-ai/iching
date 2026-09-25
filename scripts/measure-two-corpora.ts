#!/usr/bin/env tsx
/**
 * The measurements in tao-te-ching-relation.md § 3–5, recomputed from the texts.
 *
 *   npm run measure              print every figure, and whether the brief agrees
 *   npm run measure -- --check   fail if any figure the brief states is not what the texts give
 *
 * They were computed once, by hand, in a scratch directory, and the brief
 * argues from them — that 君子 should be ruled here first, that the bridge
 * between the books runs through the Wings, that yin-yang is not the core
 * text's idea. A figure nobody can recompute is a claim rather than a grade
 * (`a-grade-must-be-testable`), so each one the brief states is listed in
 * CLAIMS below, beside the number the texts give.
 *
 * THE THREE CORPORA
 *   Daodejing    ../taoteching/source/chinese.md, the Wang Bi recension, ## Chapter 1–81
 *   Zhouyi core  sources/zhouyi/*.md, the 卦辭 and 爻辭 sections only
 *   Wings        every other section of sources/zhouyi/*.md (彖傳, 大象傳, 小象傳, 文言傳)
 *                plus sources/wings/*.md — headings and English excluded,
 *                collation notes 〔…〕 kept, as the vendored text keeps them
 *
 * HOW A THING IS COUNTED
 *   A character is a Han graph; punctuation, digits and Latin are not counted.
 *   A term is counted as non-overlapping occurrences inside a run of Han graphs,
 *   so 天地 split by a comma is not 天地. A shared string is a run both texts
 *   contain inside a single punctuated segment.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'

const ROOT = resolve(__dirname, '..')
const TAOTECHING = resolve(ROOT, '..', 'taoteching')
const CHECK = process.argv.slice(2).includes('--check')

const HAN = /[㐀-鿿\u{20000}-\u{2ffff}]/u
const HAN_RUN = /[㐀-鿿\u{20000}-\u{2ffff}]+/gu

const body = (text: string) => text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
/** Drop markdown headings and blockquotes — titles and English, not text. */
const prose = (text: string) => text.replace(/^(#|>).*$/gm, '')

function daodejing(): string {
  const path = join(TAOTECHING, 'source', 'chinese.md')
  if (!existsSync(path)) {
    console.error(`✗ the Daodejing is read from ${path} — clone opencosmos-ai/taoteching beside this repository`)
    process.exit(1)
  }
  const parts = readFileSync(path, 'utf8').split(/^## Chapter (\d+)$/m)
  const chapters = parts.filter((_, i) => i % 2 === 0 && i > 0)
  if (chapters.length !== 81) throw new Error(`expected 81 chapters, found ${chapters.length}`)
  return chapters.join('\n')
}

function zhouyi(): { core: string; wings: string } {
  const dir = join(ROOT, 'sources', 'zhouyi')
  let core = ''
  let wings = ''
  const files = readdirSync(dir).filter(f => /^\d{2}\.md$/.test(f)).sort()
  if (files.length !== 64) throw new Error(`expected 64 zhouyi files, found ${files.length}`)
  for (const f of files) {
    const parts = body(readFileSync(join(dir, f), 'utf8')).split(/^## (.+)$/m)
    for (let i = 1; i < parts.length; i += 2) {
      if (parts[i] === '卦辭' || parts[i] === '爻辭') core += parts[i + 1] + '\n'
      else wings += prose(parts[i + 1]) + '\n'
    }
  }
  const wdir = join(ROOT, 'sources', 'wings')
  for (const f of readdirSync(wdir).filter(f => f.endsWith('.md') && f !== 'README.md').sort())
    wings += prose(body(readFileSync(join(wdir, f), 'utf8'))) + '\n'
  return { core, wings }
}

const graphs = (text: string) => [...text].filter(c => HAN.test(c))
const runs = (text: string) => text.match(HAN_RUN) ?? []
function count(text: string, term: string): number {
  let n = 0
  for (const run of runs(text)) for (let i = run.indexOf(term); i !== -1; i = run.indexOf(term, i + term.length)) n++
  return n
}
const pct = (n: number) => `${(100 * n).toFixed(1)}%`

/** Every string of `len` graphs occurring in a single run of `text`. */
function ngrams(text: string, len: number): Set<string> {
  const out = new Set<string>()
  for (const run of runs(text)) {
    const g = [...run]
    for (let i = 0; i + len <= g.length; i++) out.add(g.slice(i, i + len).join(''))
  }
  return out
}

const ddj = daodejing()
const { core, wings } = zhouyi()
const corpora = { daodejing: ddj, core, wings } as const
type Corpus = keyof typeof corpora

// ─── the figures ────────────────────────────────────────────────────────────

const figures = new Map<string, number | string>()
const set = (key: string, v: number | string) => figures.set(key, v)

const ddjGraphs = graphs(ddj)
const ddjSet = new Set(ddjGraphs)
for (const name of Object.keys(corpora) as Corpus[]) {
  const g = graphs(corpora[name])
  const s = new Set(g)
  set(`${name} characters`, g.length)
  set(`${name} distinct graphs`, s.size)
  if (name === 'daodejing') continue
  const shared = [...s].filter(c => ddjSet.has(c)).length
  const union = new Set([...s, ...ddjSet]).size
  set(`${name} graphs shared with the Daodejing`, shared)
  set(`${name} shared, as a share of the union`, pct(shared / union))
  set(`${name} coverage of the Daodejing`, pct(ddjGraphs.filter(c => s.has(c)).length / ddjGraphs.length))
}

const TERMS = [
  // § 3, the locked terms
  '道', '天地', '萬物', '常', '善', '器', '仁', '極', '無為', '自然', '樸', '慈', '知足', '復命',
  // § 3, the cast
  '聖人', '君子', '小人', '陰', '陽', '貞', '亨', '孚',
  // § 5
  '剛', '柔', '剛柔', '柔弱', '謙', '時',
]
for (const t of TERMS) for (const name of Object.keys(corpora) as Corpus[]) set(`${t} in ${name}`, count(corpora[name], t))
set('貞 亨 孚 in core, together', ['貞', '亨', '孚'].reduce((n, t) => n + count(core, t), 0))

// § 4 — the longest string the Daodejing shares with the core text.
let longest = 0
const sharedStrings: string[] = []
for (let len = 2; len <= 12; len++) {
  const inCore = ngrams(core, len)
  const both = [...ngrams(ddj, len)].filter(s => inCore.has(s))
  if (!both.length) break
  longest = len
  if (len === 4) sharedStrings.push(...both)
}
set('longest string shared by the Daodejing and the core', longest)
set('four-graph strings shared by the Daodejing and the core', sharedStrings.sort().join(' ') || '—')

// ─── what the brief says ────────────────────────────────────────────────────
// Each figure as tao-te-ching-relation.md states it. Change a claim here only
// together with the sentence in the brief that makes it.

const CLAIMS: Record<string, number | string> = {
  'daodejing characters': 5296,
  'core characters': 4935,
  'wings characters': 15298,
  'daodejing distinct graphs': 798,
  'core distinct graphs': 797,
  'wings distinct graphs': 1246,
  'core graphs shared with the Daodejing': 315,
  'wings graphs shared with the Daodejing': 529,
  'core shared, as a share of the union': '24.6%',
  'wings shared, as a share of the union': '34.9%',
  'core coverage of the Daodejing': '69.6%',
  'wings coverage of the Daodejing': '90.9%',
  '道 in daodejing': 75, '道 in core': 4, '道 in wings': 104,
  '天地 in daodejing': 9, '天地 in core': 0, '天地 in wings': 50,
  '萬物 in daodejing': 20, '萬物 in core': 0, '萬物 in wings': 41,
  '常 in daodejing': 30, '常 in core': 0, '常 in wings': 11,
  '善 in daodejing': 52, '善 in core': 0, '善 in wings': 18,
  '器 in daodejing': 12, '器 in core': 0, '器 in wings': 12,
  '仁 in daodejing': 8, '仁 in core': 0, '仁 in wings': 10,
  '極 in daodejing': 6, '極 in core': 0, '極 in wings': 9,
  '無為 in core': 0, '無為 in wings': 0, '自然 in core': 0, '自然 in wings': 0,
  '樸 in core': 0, '樸 in wings': 0, '慈 in core': 0, '慈 in wings': 0,
  '知足 in core': 0, '知足 in wings': 0, '復命 in core': 0, '復命 in wings': 0,
  '聖人 in daodejing': 30, '聖人 in core': 0, '聖人 in wings': 38,
  '君子 in daodejing': 3, '君子 in core': 20, '君子 in wings': 108,
  '小人 in daodejing': 0, '小人 in core': 10, '小人 in wings': 22,
  '陰 in daodejing': 1, '陰 in core': 1, '陰 in wings': 19,
  '陽 in daodejing': 1, '陽 in core': 0, '陽 in wings': 19,
  '貞 in daodejing': 1, '貞 in core': 111, '貞 in wings': 65,
  '亨 in daodejing': 0, '亨 in core': 48, '亨 in wings': 52,
  '孚 in daodejing': 0, '孚 in core': 42, '孚 in wings': 27,
  '貞 亨 孚 in core, together': 201,
  '剛 in wings': 98, '柔 in wings': 69, '剛柔 in wings': 21,
  '柔 in daodejing': 11, '剛 in daodejing': 2, '剛柔 in daodejing': 0, '柔弱 in daodejing': 5,
  '謙 in core': 7, '謙 in wings': 22, '謙 in daodejing': 0,
  '時 in wings': 58, '時 in daodejing': 1,
  'longest string shared by the Daodejing and the core': 4,
  'four-graph strings shared by the Daodejing and the core': '君子終日',
}

// ─── report ─────────────────────────────────────────────────────────────────

let wrong = 0
console.log('\nthe two-corpus measurements — tao-te-ching-relation.md § 3–5\n')
for (const [key, got] of figures) {
  if (!(key in CLAIMS)) {
    console.log(`    ${key}: ${got}`)
    continue
  }
  const said = CLAIMS[key]
  if (String(said) === String(got)) console.log(`  ✓ ${key}: ${got}`)
  else {
    wrong++
    console.log(`  ✗ ${key}: the texts give ${got}, the brief says ${said}`)
  }
}
const unmeasured = Object.keys(CLAIMS).filter(k => !figures.has(k))
for (const k of unmeasured) console.log(`  ✗ ${k}: claimed, but this script does not measure it`)
wrong += unmeasured.length

const claimed = Object.keys(CLAIMS).length
console.log(wrong ? `\n✗ ${wrong} of ${claimed} figures in the brief are not what the texts give\n`
                  : `\n✓ all ${claimed} figures in the brief reproduce\n`)
process.exit(CHECK && wrong ? 1 : 0)
