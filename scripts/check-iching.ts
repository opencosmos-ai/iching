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

type Hex = { number: number; chinese: string; figure: string; lower: string; upper: string; render: unknown; status: unknown }
type Tri = { id: string; chinese: string; figure: string }

const hexagrams: Hex[] = read('hexagrams')
  .map(h => {
    const t = (h.trigrams ?? {}) as { lower?: string; upper?: string }
    return {
      number: Number(h.number),
      chinese: String(h.chinese),
      figure: String(h.lines),
      lower: String(t.lower),
      upper: String(t.upper),
      render: h.render,
      status: h.status,
    }
  })
  .sort((a, b) => a.number - b.number)
const trigrams: Tri[] = read('trigrams').map(t => ({ id: String(t.id), chinese: String(t.chinese), figure: String(t.lines) }))

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
    const want = [h.number, h.chinese, h.pinyin, h.lines, t.lower, t.upper, h.render ?? null, h.status, h.judgment ?? null].map(v => (v == null || v === '' ? null : String(v)))
    const got = g ? [g.number, g.chinese, g.pinyin, g.figure, g.trigrams.lower, g.trigrams.upper, g.render, g.status, g.judgment].map(v => (v == null ? null : String(v))) : []
    if (want.join('\u0000') !== got.join('\u0000')) drift.push(`hexagram ${h.number}`)
  })
  const triSrc = read('trigrams')
  if (GEN_TRIGRAMS.length !== triSrc.length) drift.push(`${GEN_TRIGRAMS.length} trigrams against ${triSrc.length}`)
  triSrc.forEach((t, i) => {
    const g = GEN_TRIGRAMS[i]
    const want = [t.id, t.chinese, t.pinyin, t.lines, t.image_chinese, t.render ?? null, t.status].map(v => (v == null || v === '' ? null : String(v)))
    const got = g ? [g.id, g.chinese, g.pinyin, g.figure, g.imageChinese, g.render, g.status].map(v => (v == null ? null : String(v))) : []
    if (want.join('\u0000') !== got.join('\u0000')) drift.push(`trigram ${t.id}`)
  })
  const lookupBad = hexagrams.filter(h => HEXAGRAM_BY_FIGURE[h.figure] !== h.number)
  if (lookupBad.length) drift.push(`figure lookup for ${lookupBad.map(h => h.number).join(', ')}`)
  if (drift.length) fail(`stale against the frontmatter — run \`npm run build\`: ${drift.slice(0, 8).join('; ')}${drift.length > 8 ? ` … ${drift.length} in all` : ''}`)
  else pass('agrees with the frontmatter, row for row')
}

console.log(failures === 0 ? '\n✓ all checks passed\n' : `\n✗ ${failures} failure(s)\n`)
process.exit(failures ? 1 : 0)
