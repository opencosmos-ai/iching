// Check the readings — "The heart of it" in every hexagrams/NN.md — against
// their house style (Shalom, 2026-09-27):
//
//   1. Every Chinese passage is followed by its English, in parentheses.
//   2. No pinyin in the readings; the romanization lives in the name field.
//   3. Sources and commentators are named in English (the Shuowen, Wang Bi,
//      the Tuan), not in Chinese: Chinese is kept where the characters
//      themselves are being read.
//
// Fails (exit 1) and never rewrites. Pass file paths to check only those.
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..')
const HAN = '\\u3400-\\u9fff\\u{20000}-\\u{2ffff}'
// A run of Chinese, allowing the punctuation that sits inside a quoted phrase.
const RUN = new RegExp(`[${HAN}](?:[${HAN}，。：；、？！·…「」『』〔〕]|\\s(?=[${HAN}]))*`, 'gu')
const TONE = /[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜńňǹ]/
const SOURCES = ['說文解字', '說文', '王弼', '彖傳', '大象傳', '小象傳', '大象', '小象', '雜卦', '序卦', '說卦', '繫辭上', '繫辭下', '繫辭', '文言', '彖', '象傳']

type Finding = { file: string; line: number; rule: string; text: string }

export function checkReading(file: string, text: string): Finding[] {
  const start = text.indexOf('## The heart of it')
  if (start < 0) return [{ file, line: 0, rule: 'missing', text: 'no "## The heart of it" section' }]
  const end = text.indexOf('\n## ', start + 1)
  // Code spans and link targets are file paths, not prose: blank them out
  // (same length, so line numbers hold) before looking for Chinese.
  const blank = (s: string) => ' '.repeat(s.length)
  const section = text
    .slice(start, end < 0 ? undefined : end)
    .replace(/`[^`\n]*`/g, blank)
    .replace(/\]\([^)\n]*\)/g, blank)
  const offset = text.slice(0, start).split('\n').length - 1
  const findings: Finding[] = []
  const lineOf = (index: number) => offset + section.slice(0, index).split('\n').length

  for (const m of section.matchAll(RUN)) {
    const after = section.slice(m.index! + m[0].length)
    if (!/^\s*\(/.test(after)) {
      findings.push({ file, line: lineOf(m.index!), rule: 'no-english', text: m[0] })
    }
    if (SOURCES.includes(m[0])) {
      findings.push({ file, line: lineOf(m.index!), rule: 'source-in-chinese', text: m[0] })
    }
  }
  section.split('\n').forEach((line, i) => {
    const word = line.split(/[\s*()",;.:—]+/).find((w) => TONE.test(w))
    if (word) findings.push({ file, line: offset + i + 1, rule: 'pinyin', text: word })
  })
  return findings
}

const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync(join(root, 'hexagrams')).filter((f) => /^\d\d\.md$/.test(f)).map((f) => join(root, 'hexagrams', f))

const findings = files.flatMap((f) => checkReading(f, readFileSync(f, 'utf8')))
for (const f of findings) console.log(`${f.file.replace(root + '/', '')}:${f.line}  ${f.rule}  ${f.text}`)
const by = findings.reduce<Record<string, number>>((acc, f) => ((acc[f.rule] = (acc[f.rule] ?? 0) + 1), acc), {})
console.log(findings.length ? `✗ ${findings.length} finding(s) — ${JSON.stringify(by)}` : `✓ readings: ${files.length} file(s) clean`)
process.exit(findings.length ? 1 : 0)
