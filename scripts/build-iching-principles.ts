#!/usr/bin/env tsx
/**
 * principles/*.md  →  INDEX.md + principles.yaml
 *
 *   npm run principles                            build, verify, write INDEX + yaml
 *   npm run principles -- --check                 verify only, write nothing
 *   npm run principles -- --applies drafting      the rules this work fires
 *
 * The index is generated because a hand-kept index of anything goes stale — that
 * is the inherited `edited-or-generated` principle, applied to the directory
 * that holds it.
 *
 * It also **verifies every `evidence:` anchor resolves to a real heading in the
 * file it names.** A principle whose evidence has rotted is a rule with nothing
 * behind it, and the rot is invisible until someone follows the link. Here it is
 * a build error instead.
 *
 * And it **verifies shape**, on the Tao Te Ching project's standard (its
 * process/principles/README.md → "The shape of an entry"): the two opening
 * paragraphs, the five sections in order, a "How it is implemented" that names
 * its `check:` tool, and an `applies:` that some file in this repository loads
 * with `--applies`. A principle that is well argued and reached by nobody
 * governs nothing, so the build refuses one. Any failure writes nothing.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { load } from 'js-yaml'

const ROOT = resolve(__dirname, '..')
const DIR = join(ROOT, 'principles')

const ARGS = process.argv.slice(2)
const CHECK_ONLY = ARGS.includes('--check')
const APPLIES = ARGS.includes('--applies') ? ARGS[ARGS.indexOf('--applies') + 1] ?? '' : null

/** The kinds of work. `sources` is this project's own; there is no `notes` layer here. */
const SCOPES = ['drafting', 'glossary', 'sources', 'tooling', 'process'] as const

/** The standard sections, in order — inherited from the parent unchanged. */
const SECTIONS = [
  'Why this holds',
  'Why this principle exists',
  'How it is implemented',
  'Where it does not fire',
  'What it obliges',
]

/**
 * The files that load principles into work. Each carries an
 * `npm run principles -- --applies <scope>` line at the moment that work begins.
 * A scope nobody loads is a principle nobody meets.
 */
const LOADERS = ['method.md', 'README.md', 'glossary/README.md', 'sources/PROVENANCE.md', '.claude/skills']

type Entry = {
  id: string
  title: string
  status: 'provisional' | 'active' | 'superseded'
  since: string
  trigger: string
  applies: string[]
  evidence: string[]
  check: string
  supersedes: string[]
  file: string
}

let failures = 0
const fail = (m: string) => {
  console.log(`  ✗ ${m}`)
  failures++
}

/** GitHub's heading-anchor rule, near enough: lowercase, drop punctuation, spaces to hyphens. */
function slug(heading: string): string {
  return heading
    .trim()
    .toLowerCase()
    .replace(/[`*_~]/g, '')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s/g, '-')
}

function headingsOf(path: string): Set<string> {
  const out = new Set<string>()
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const m = /^#{1,6}\s+(.*?)\s*$/.exec(line)
    if (m) out.add(slug(m[1]))
  }
  return out
}

const entries: Entry[] = readdirSync(DIR)
  .filter(f => f.endsWith('.md') && f !== 'README.md' && f !== 'INDEX.md')
  .sort()
  .map(f => {
    const text = readFileSync(join(DIR, f), 'utf8')
    const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)
    if (!m) throw new Error(`${f}: no frontmatter`)
    const fm = load(m[1]) as Omit<Entry, 'file'>
    if (fm.id !== f.replace(/\.md$/, '')) fail(`${f}: id "${fm.id}" does not match the filename`)
    for (const field of ['title', 'status', 'since', 'trigger', 'applies', 'check'] as const) {
      if (fm[field] === undefined) fail(`${f}: missing ${field}`)
    }
    for (const scope of fm.applies ?? []) {
      if (!(SCOPES as readonly string[]).includes(scope)) fail(`${f}: applies "${scope}" is not one of ${SCOPES.join(' / ')}`)
    }
    if (fm.status === 'active' && (fm.evidence ?? []).length < 2) {
      fail(`${f}: status is active but carries ${(fm.evidence ?? []).length} case(s) — two independent cases is the threshold`)
    }
    return { ...fm, file: f }
  })

// Evidence must point somewhere real.
const cache = new Map<string, Set<string> | null>()
let anchors = 0
for (const e of entries) {
  for (const ref of e.evidence ?? []) {
    const [rel, anchor] = ref.split('#')
    const path = join(DIR, rel)
    if (!cache.has(path)) cache.set(path, existsSync(path) ? headingsOf(path) : null)
    const heads = cache.get(path)
    if (heads === null) { fail(`${e.file}: evidence names a file that does not exist — ${rel}`); continue }
    if (anchor && !heads!.has(anchor)) { fail(`${e.file}: evidence anchor not found — ${ref}`); continue }
    anchors++
  }
}

// Which scopes does anything actually load?
function filesUnder(rel: string): string[] {
  const p = join(ROOT, rel)
  if (!existsSync(p)) return []
  if (statSync(p).isFile()) return [p]
  return readdirSync(p, { recursive: true } as { recursive: true })
    .map(x => join(p, String(x)))
    .filter(x => x.endsWith('.md') && statSync(x).isFile())
    // the principle skill names scopes as documentation, not as a moment of work
    .filter(x => !x.includes('principle-entry'))
}
const loaded = new Set<string>()
for (const rel of LOADERS) {
  for (const file of filesUnder(rel)) {
    for (const m of readFileSync(file, 'utf8').matchAll(/--applies\s+([a-z]+)/g)) loaded.add(m[1])
  }
}
for (const scope of SCOPES) {
  if (!loaded.has(scope)) fail(`scope "${scope}" is loaded by nothing — add an \`npm run principles -- --applies ${scope}\` line where that work begins`)
}

// Shape: the sections a principle needs in order to be read, and in order to run.
for (const e of entries) {
  if (e.status === 'superseded') continue
  const text = readFileSync(join(DIR, e.file), 'utf8')
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
  for (const lead of ['**The rule.**', '**When it fires.**']) {
    if (!body.includes(lead)) fail(`${e.file}: no ${lead} paragraph at the top`)
  }
  const heads = [...body.matchAll(/^## (.+)$/gm)].map(m => m[1].trim().toLowerCase())
  const pos: number[] = []
  for (const want of SECTIONS) {
    const i = heads.findIndex(h => h.startsWith(want.toLowerCase()))
    if (i < 0) fail(`${e.file}: missing section "## ${want}"`)
    else pos.push(i)
  }
  if (pos.some((p, i) => i > 0 && p < pos[i - 1])) fail(`${e.file}: sections out of order — expected ${SECTIONS.join(' → ')}`)
  const impl = /^## How it is implemented\s*\n([\s\S]*?)(?=^## |(?![\s\S]))/m.exec(body)?.[1] ?? ''
  if (impl && impl.split(/\s+/).filter(Boolean).length < 12) fail(`${e.file}: "How it is implemented" is too thin to say where the rule runs`)
  const tool = (e.check ?? 'none').trim()
  if (tool !== 'none' && impl && !impl.includes(tool.split(/\s+/)[0])) fail(`${e.file}: check "${tool}" is not named in "How it is implemented"`)
  if (!(e.applies ?? []).some(a => loaded.has(a))) fail(`${e.file}: applies [${(e.applies ?? []).join(', ')}] — nothing in this repository loads any of these, so nobody meets this rule`)
}

// --applies: what fires on this kind of work
if (APPLIES !== null) {
  if (!(SCOPES as readonly string[]).includes(APPLIES)) {
    console.log(`--applies takes one of: ${SCOPES.join(', ')}`)
    process.exit(1)
  }
  const hits = entries.filter(e => e.status !== 'superseded' && (e.applies ?? []).includes(APPLIES))
  console.log(`\nprinciples that fire on \`${APPLIES}\` — ${hits.length}  (and the Tao Te Ching project's, which apply here in full)\n`)
  for (const e of hits) {
    console.log(`  ${e.status === 'active' ? '✅' : '🔶'} ${e.title}`)
    console.log(`     fires when: ${e.trigger}`)
    console.log(`     principles/${e.file}\n`)
  }
  process.exit(failures ? 1 : 0)
}

if (failures || CHECK_ONLY) {
  console.log(failures ? `\n✗ ${failures} failure(s). Nothing written.\n`
                       : `\n✓ principles — ${entries.length} entries, ${anchors} anchors resolving, all shaped to run\n`)
  process.exit(failures ? 1 : 0)
}

const MARK: Record<string, string> = { active: '✅', provisional: '🔶', superseded: '⛔' }
const byStatus = (s: string) => entries.filter(e => e.status === s).length

const index = [
  '# Principles — index',
  '',
  '*Generated by `npm run principles` from the frontmatter of each entry.*',
  '**Never edit this file by hand.** Edit the entry, then rebuild.',
  '',
  `**${byStatus('active') + byStatus('provisional')} in force** — ${byStatus('active')} active, ${byStatus('provisional')} provisional.`,
  '',
  'These are the rules **this** project learned. The Tao Te Ching project\'s principles apply here in full and are not repeated —',
  'see [`../method.md`](../method.md) § 6 for the ones that fire hardest on this book.',
  '',
  '*A principle fires on its **trigger**. Read that column first.*',
  '',
  '| | When it fires | The rule | Applies to | Enforced by |',
  '|---|---|---|---|---|',
  ...entries
    .slice()
    .sort((a, b) => (a.status === b.status ? a.title.localeCompare(b.title) : a.status === 'active' ? -1 : 1))
    .map(e => `| ${MARK[e.status] ?? '?'} | ${e.trigger} | **[${e.title}](${e.file})** | ${(e.applies ?? []).join(' · ')} | ${e.check === 'none' ? '—' : `\`${e.check}\``} |`),
  '',
].join('\n')

writeFileSync(join(DIR, 'INDEX.md'), index)

const yaml = [
  '# Generated by npm run principles. Do not edit by hand.',
  'principles:',
  ...entries.flatMap(e => [
    `  - id: ${e.id}`,
    `    title: ${JSON.stringify(e.title)}`,
    `    status: ${e.status}`,
    `    since: ${e.since}`,
    `    trigger: ${JSON.stringify(e.trigger)}`,
    `    applies: [${(e.applies ?? []).join(', ')}]`,
    `    check: ${e.check}`,
    `    evidence:`,
    ...(e.evidence ?? []).map(x => `      - ${JSON.stringify(x)}`),
  ]),
  '',
].join('\n')
writeFileSync(join(DIR, 'principles.yaml'), yaml)

console.log(`\nprinciples`)
console.log(`  ${entries.length} entries — ${byStatus('active')} active, ${byStatus('provisional')} provisional, ${byStatus('superseded')} superseded`)
console.log(`  ${anchors} evidence anchors, all resolving`)
console.log(`  → principles/INDEX.md, principles.yaml`)
console.log(`  all shaped to run, every scope loaded`)
console.log('\n✓ principles verified\n')
