// Check WORKLIST.md against WORKLIST-CLOSED.md.
//
// The worklist said from the start that a closed item leaves it. On 2026-10-20,
// 19 of its 31 rows were closed and still in it, and a finished section (A1)
// held a debt that no open row named. A rule written in prose did not hold, so
// it is held here:
//
//   closed-row      no row in WORKLIST.md is marked done
//   archived-id     no id stands in both files, so a reopened row moves back
//                   rather than being copied, and a new row cannot take an id
//                   that a hexagram or the CHANGELOG already cites
//   open-archived   every row in WORKLIST-CLOSED.md is marked done
//   duplicate-id    no id appears twice in either file
//   stray-section   below the table, WORKLIST.md has only sections headed by
//                   the id of one of its own rows ("## A12 · …")
//
// Fails (exit 1) and never rewrites. Before reading the real files it proves
// each rule fires on the failure it exists for: a check that only ever passes
// is worth nothing.
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..')
const DONE = '✅'
const STATUSES = new Set(['✅', '🔶', '⬜', '⏸', '🔴'])
const ID = /^[A-Z]\d+$/

type Row = { id: string; status: string; line: number }
type Finding = { rule: string; detail: string }

export function rows(text: string): Row[] {
  return text.split('\n').flatMap((line, i) => {
    if (!line.startsWith('|')) return []
    const cells = line.split('|').slice(1, -1).map((c) => c.trim())
    if (cells.length < 5 || !ID.test(cells[0]) || !STATUSES.has(cells[1])) return []
    return [{ id: cells[0], status: cells[1], line: i + 1 }]
  })
}

export function checkWorklist(live: string, closed: string): Finding[] {
  const out: Finding[] = []
  const liveRows = rows(live)
  const closedRows = rows(closed)

  for (const [name, list] of [['WORKLIST.md', liveRows], ['WORKLIST-CLOSED.md', closedRows]] as const) {
    const seen = new Map<string, number>()
    for (const r of list) {
      if (seen.has(r.id)) out.push({ rule: 'duplicate-id', detail: `${r.id} is on lines ${seen.get(r.id)} and ${r.line} of ${name}` })
      seen.set(r.id, r.line)
    }
  }
  for (const r of liveRows) {
    if (r.status === DONE) {
      out.push({ rule: 'closed-row', detail: `${r.id} (WORKLIST.md line ${r.line}) is done — move it, word for word, to WORKLIST-CLOSED.md` })
    }
  }
  const archived = new Map(closedRows.map((r) => [r.id, r]))
  for (const r of liveRows) {
    const a = archived.get(r.id)
    if (a) out.push({ rule: 'archived-id', detail: `${r.id} is in WORKLIST.md (line ${r.line}) and WORKLIST-CLOSED.md (line ${a.line}) — a reopened row moves back; a new row takes an unused id` })
  }
  for (const r of closedRows) {
    if (r.status !== DONE) out.push({ rule: 'open-archived', detail: `${r.id} (WORKLIST-CLOSED.md line ${r.line}) is ${r.status}, not done — it belongs in WORKLIST.md` })
  }

  const lines = live.split('\n')
  const tableEnd = lines.reduce((last, line, i) => (line.startsWith('|') ? i : last), -1)
  const open = new Set(liveRows.filter((r) => r.status !== DONE).map((r) => r.id))
  lines.slice(tableEnd + 1).forEach((line, i) => {
    const m = /^## (\S+)/.exec(line)
    if (m && !open.has(m[1])) {
      out.push({ rule: 'stray-section', detail: `"${line}" (WORKLIST.md line ${tableEnd + i + 2}) is below the table but heads no open row` })
    }
  })
  return out
}

// ---- the rules against the failures they exist for -------------------------
const table = (...r: string[]) => ['| # | | Item | Where | Unit |', '|---|---|---|---|---|', ...r].join('\n') + '\n'
const row = (id: string, status: string) => `| ${id} | ${status} | x | — | 1 |`
const cases: [string, string, string, string[]][] = [
  ['the 2026-10-20 state: done rows left in place', table(row('A1', '✅'), row('A4', '⬜')), table(), ['closed-row']],
  ['a finished section left under the table', table(row('A4', '⬜')) + '\n## A1 · The eight trigrams — done\n', table(), ['stray-section']],
  ['a section kept for a row that closed', table(row('A1', '✅')) + '\n## A1 · The eight trigrams — done\n', table(), ['closed-row', 'stray-section']],
  ['a reopened row copied instead of moved', table(row('B6', '⬜')), table(row('B6', '✅')), ['archived-id']],
  ['an open row filed as closed', table(), table(row('A11', '🔴')), ['open-archived']],
  ['one id twice', table(row('A4', '⬜'), row('A4', '🔶')), table(), ['duplicate-id']],
  ['the split done right', table(row('A12', '🔴')) + '\n## A12 · What the 64 readings surfaced\n', table(row('A1', '✅')), []],
]
let broken = 0
for (const [name, live, closed, want] of cases) {
  const got = checkWorklist(live, closed).map((f) => f.rule).sort()
  if (got.join() !== want.join()) {
    console.log(`  ✗ self-test "${name}": expected [${want}], got [${got}]`)
    broken++
  }
}
if (broken) {
  console.log(`✗ worklist checker: ${broken} self-test(s) failed — its rules cannot be trusted`)
  process.exit(1)
}

const findings = checkWorklist(
  readFileSync(join(root, 'WORKLIST.md'), 'utf8'),
  readFileSync(join(root, 'WORKLIST-CLOSED.md'), 'utf8'),
)
for (const f of findings) console.log(`  ✗ ${f.rule}  ${f.detail}`)
console.log(
  findings.length
    ? `✗ worklist: ${findings.length} finding(s)`
    : `✓ worklist: ${rows(readFileSync(join(root, 'WORKLIST.md'), 'utf8')).length} open rows, every closed one in WORKLIST-CLOSED.md (${cases.length} self-tests)`,
)
process.exit(findings.length ? 1 : 0)
