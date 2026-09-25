#!/usr/bin/env tsx
/**
 * The 64 hexagram names against the locks  →  glossary/NAMES.md
 *
 *   npm run names                build, write glossary/NAMES.md
 *   npm run names -- --check     fail if NAMES.md is stale; write nothing
 *
 * WORKLIST A9: before any name is drafted, know which of them a lock already
 * binds, and how each name is used as a word in the book. A name is not only a
 * label — 井 is the well the line texts keep returning to, and a rendering that
 * works on the title page and fails inside the lines is not a rendering.
 *
 * This is a concordance, not a checker (the parent's tools/concordance.py is the
 * model, and says why the two must not merge): it shows the evidence, judges
 * nothing, and never fails on content. `npm run check` is the gate.
 *
 * WHAT IT READS
 *   hexagrams/NN.md          the name, pinyin, trigrams
 *   sources/zhouyi/NN.md     the core text (卦辭, 爻辭) and the Wings in each file
 *   sources/wings/*.md       the standalone Wings
 *   sources/locks/terms.yaml the parent project's locks
 *
 * One variant is surfaced rather than applied: the Zhouyi writes the negative
 * 无, and the lock is written on 無. They are the same word in two graphs, and
 * whether the lock binds 无 is a ruling for glossary/, not for this script — so
 * every name carrying 无 is marked, and nothing is folded.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { load } from 'js-yaml'

const ROOT = resolve(__dirname, '..')
const OUT = join(ROOT, 'glossary', 'NAMES.md')
const CHECK_ONLY = process.argv.slice(2).includes('--check')

/** Graphs the Zhouyi writes for a locked character, shown and never folded. */
const VARIANTS: Record<string, string> = { 无: '無' }

type Row = Record<string, unknown>
function frontmatter(text: string): Row {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)
  if (!m) throw new Error('no frontmatter')
  return (load(m[1]) ?? {}) as Row
}
const body = (text: string) => text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
const HAN_RUN = /[㐀-鿿\u{20000}-\u{2ffff}]+/gu
function count(text: string, term: string): number {
  let n = 0
  for (const run of text.match(HAN_RUN) ?? []) for (let i = run.indexOf(term); i !== -1; i = run.indexOf(term, i + term.length)) n++
  return n
}

// ─── the texts ──────────────────────────────────────────────────────────────

type Hex = { n: number; name: string; pinyin: string; lower: string; upper: string; core: string; wings: string }
const hexes: Hex[] = []
for (let n = 1; n <= 64; n++) {
  const nn = String(n).padStart(2, '0')
  const fm = frontmatter(readFileSync(join(ROOT, 'hexagrams', `${nn}.md`), 'utf8'))
  const parts = body(readFileSync(join(ROOT, 'sources', 'zhouyi', `${nn}.md`), 'utf8')).split(/^## (.+)$/m)
  let core = ''
  let wings = ''
  for (let i = 1; i < parts.length; i += 2) {
    if (parts[i] === '卦辭' || parts[i] === '爻辭') core += parts[i + 1] + '\n'
    else wings += parts[i + 1] + '\n'
  }
  const t = fm.trigrams as { lower: string; upper: string }
  hexes.push({ n, name: String(fm.chinese), pinyin: String(fm.pinyin), lower: t.lower, upper: t.upper, core, wings })
}
const trigramName = new Map(
  readdirSync(join(ROOT, 'trigrams')).filter(f => f.endsWith('.md')).map(f => {
    const fm = frontmatter(readFileSync(join(ROOT, 'trigrams', f), 'utf8'))
    return [String(fm.id), String(fm.chinese)] as const
  }),
)
let wingsBook = ''
for (const f of readdirSync(join(ROOT, 'sources', 'wings')).filter(f => f.endsWith('.md') && f !== 'README.md'))
  wingsBook += body(readFileSync(join(ROOT, 'sources', 'wings', f), 'utf8')).replace(/^(#|>).*$/gm, '') + '\n'

const allCore = hexes.map(h => h.core).join('\n')
const allWings = hexes.map(h => h.wings).join('\n') + wingsBook

type Lock = { term: string; pinyin: string; render: string; forbidden: string[]; flexions?: { english: string; chapters: number[] }[] }
const locks = load(readFileSync(join(ROOT, 'sources', 'locks', 'terms.yaml'), 'utf8')) as Lock[]
const lockChars = (l: Lock) => l.term.split('&').map(c => c.trim()).filter(Boolean)

// ─── per name ───────────────────────────────────────────────────────────────

type Hit = { lock: Lock; via: string }
const rows = hexes.map(h => {
  const hits: Hit[] = []
  for (const lock of locks) {
    for (const c of lockChars(lock)) {
      if (h.name.includes(c)) hits.push({ lock, via: c })
      for (const [variant, locked] of Object.entries(VARIANTS))
        if (locked === c && h.name.includes(variant)) hits.push({ lock, via: `${variant} (the Zhouyi's graph for ${c})` })
    }
  }
  // The name as a word: in its own core text, minus the title slot the 卦辭 opens with.
  const opensWithName = h.core.trimStart().startsWith(h.name)
  const ownCore = count(h.core, h.name) - (opensWithName ? 1 : 0)
  const elsewhere = hexes.filter(o => o.n !== h.n && count(o.core, h.name) > 0).map(o => o.n)
  return { h, hits, ownCore, elsewhere, coreTotal: count(allCore, h.name), wingsTotal: count(allWings, h.name) }
})

// ─── write ──────────────────────────────────────────────────────────────────

const bound = rows.filter(r => r.hits.length)
const viaVariant = rows.filter(r => r.hits.some(x => x.via.includes('(')))
const asWord = rows.filter(r => r.ownCore > 0)
const twoGraph = rows.filter(r => [...r.h.name].length > 1)
const cell = (s: string) => s.replace(/\|/g, '\\|')
const lockCell = (hits: Hit[]) =>
  hits.map(x => `${x.via} → ${cell(x.lock.render)}${x.lock.forbidden.length ? `; never ${x.lock.forbidden.map(f => `"${f}"`).join(', ')}` : ''}`).join('<br>') || '—'

const md = [
  '# The 64 names, against the locks',
  '',
  '*Generated by `npm run names` from `hexagrams/`, `sources/zhouyi/`, `sources/wings/` and `sources/locks/`.*',
  '**Never edit this file by hand.** It is a concordance: it shows the evidence and decides nothing.',
  '',
  '**Read before drafting any name** ([`WORKLIST.md`](../WORKLIST.md) A7). A name is not only a label — it is usually',
  'a word the judgment and the lines go on using, and an English name has to survive being that word too.',
  '',
  '## What it shows',
  '',
  `- **${bound.length} of 64 names contain a locked character** — their English is already constrained, and a`,
  '  name that reaches for a forbidden word fails `npm run check`.',
  ...(viaVariant.length
    ? [`- **${viaVariant.length} of them through 无**, which the Zhouyi writes where the lock has 無: ${viaVariant.map(r => `${r.h.n} ${r.h.name}`).join(', ')}. **Whether the lock on 無 binds 无 is not ruled** — it decides these names and 无咎 (A4) together. 无 occurs ${count(allCore, '无')} times in the core text and ${count(allWings, '无')} in the Wings; 無, ${count(allCore, '無')} and ${count(allWings, '無')}. Until it is ruled, the lock on 無 reaches almost nothing in this book.`]
    : []),
  `- **${asWord.length} of 64 names recur as a word in their own judgment or line texts**, beyond the title that opens the 卦辭 —`,
  '  the column *in its own lines*. Those names have to work inside a sentence as well as above one.',
  `- **${twoGraph.length} names are two graphs**: ${twoGraph.map(r => `${r.h.n} ${r.h.name}`).join(', ')}.`,
  '- **The three vendored translators give no English names to compare.** Legge (*"The Hsü Hexagram"*), de Harlez',
  '  (*Su*) and McClatchie (*"THE Seu DIAGRAM"*) all romanise. Their English for a name is in how they render the',
  '  judgment that repeats it, which is in each hexagram\'s source file, not here.',
  '',
  '## The table',
  '',
  '*In its own lines* — times the name recurs in its own 卦辭 and 爻辭, not counting the title. *Core* and *Wings* —',
  'occurrences of the name\'s string across the whole core text and all the Wings, which for a one-graph name',
  'includes every use of that graph as an ordinary word.',
  '',
  '| # | Name | Say | Trigrams | Locks | In its own lines | Core | Wings | Also in the core of |',
  '|---|---|---|---|---|---|---|---|---|',
  ...rows.map(r =>
    `| ${r.h.n} | **${r.h.name}** | *${r.h.pinyin}* | ${trigramName.get(r.h.lower)}下${trigramName.get(r.h.upper)}上 | ${lockCell(r.hits)} | ${r.ownCore} | ${r.coreTotal} | ${r.wingsTotal} | ${r.elsewhere.join(', ') || '—'} |`),
  '',
].join('\n')

if (CHECK_ONLY) {
  const current = existsSync(OUT) ? readFileSync(OUT, 'utf8') : ''
  if (current !== md) {
    console.log('\n  ✗ glossary/NAMES.md is stale — run `npm run names`\n')
    process.exit(1)
  }
  console.log(`\n✓ names — NAMES.md current; ${bound.length} of 64 bound by a lock\n`)
  process.exit(0)
}
writeFileSync(OUT, md)
console.log(`\nnames\n  ${bound.length} of 64 contain a locked character (${viaVariant.length} only through 无)`)
console.log(`  ${asWord.length} recur as a word in their own lines; ${twoGraph.length} are two graphs`)
console.log('  → glossary/NAMES.md\n')
