/**
 * One-time seeder for .
 *
 * Writes the FACTS of the sixty-four hexagrams and the eight trigrams — number,
 * character, pinyin, figure, trigram decomposition — and nothing else. Every
 * English rendering is left null with `status: draft`, because a rendering is a
 * translation decision and those are Shalom's, made one at a time in the form
 * the taoteching glossary already uses.
 *
 * After this runs once, the markdown files are the source of truth. Re-running
 * refuses to clobber any file whose status is no longer `draft`.
 *
 *   npm run seed
 *
 * Verification of the table itself lives in iching-check.ts and is not optional:
 * the King Wen sequence has a structural invariant (consecutive pairs are
 * inverses, or complements when a figure is its own inverse) that catches
 * essentially any transcription error, and it is asserted on every build.
 */

import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { signatureOf, signatureYaml } from './signature'

const ROOT = resolve(__dirname, '..')

/**
 * Bottom → top, '1' = yang. Bottom-up is load-bearing everywhere in this system.
 *
 * `spectrum` is the 說卦 ch 3 pair a trigram belongs to (天地定位，山澤通氣，雷風相薄，水火不相射),
 * named by its two ids. `pole` is the kind of its odd line — 繫辭下 陽卦多陰…陽卦奇, a yang trigram
 * has one yang line among yin — and `oddLine` is where that line sits: 說卦 ch 10's first, second and
 * third draw (一索, 再索, 三索). Sky and earth have no odd line. All three are facts about the figure,
 * and `npm run check` derives them from it.
 */
const TRIGRAMS: Array<{ id: string; chinese: string; pinyin: string; binary: string; image: string; spectrum: string; pole: 'yang' | 'yin'; oddLine: 'bottom' | 'middle' | 'top' | null }> = [
  { id: 'qian', chinese: '乾', pinyin: 'qián', binary: '111', image: '天', spectrum: 'qian-kun', pole: 'yang', oddLine: null },
  { id: 'dui', chinese: '兌', pinyin: 'duì', binary: '110', image: '澤', spectrum: 'gen-dui', pole: 'yin', oddLine: 'top' },
  { id: 'li', chinese: '離', pinyin: 'lí', binary: '101', image: '火', spectrum: 'kan-li', pole: 'yin', oddLine: 'middle' },
  { id: 'zhen', chinese: '震', pinyin: 'zhèn', binary: '100', image: '雷', spectrum: 'zhen-xun', pole: 'yang', oddLine: 'bottom' },
  { id: 'xun', chinese: '巽', pinyin: 'xùn', binary: '011', image: '風', spectrum: 'zhen-xun', pole: 'yin', oddLine: 'bottom' },
  { id: 'kan', chinese: '坎', pinyin: 'kǎn', binary: '010', image: '水', spectrum: 'kan-li', pole: 'yang', oddLine: 'middle' },
  { id: 'gen', chinese: '艮', pinyin: 'gèn', binary: '001', image: '山', spectrum: 'gen-dui', pole: 'yang', oddLine: 'top' },
  { id: 'kun', chinese: '坤', pinyin: 'kūn', binary: '000', image: '地', spectrum: 'qian-kun', pole: 'yin', oddLine: null },
]

/** The King Wen sequence: [character, pinyin, figure bottom→top]. */
const HEXAGRAMS: Array<[string, string, string]> = [
  ['乾', 'qián', '111111'], ['坤', 'kūn', '000000'], ['屯', 'zhūn', '100010'], ['蒙', 'méng', '010001'],
  ['需', 'xū', '111010'], ['訟', 'sòng', '010111'], ['師', 'shī', '010000'], ['比', 'bǐ', '000010'],
  ['小畜', 'xiǎo chù', '111011'], ['履', 'lǚ', '110111'], ['泰', 'tài', '111000'], ['否', 'pǐ', '000111'],
  ['同人', 'tóng rén', '101111'], ['大有', 'dà yǒu', '111101'], ['謙', 'qiān', '001000'], ['豫', 'yù', '000100'],
  ['隨', 'suí', '100110'], ['蠱', 'gǔ', '011001'], ['臨', 'lín', '110000'], ['觀', 'guān', '000011'],
  ['噬嗑', 'shì kè', '100101'], ['賁', 'bì', '101001'], ['剝', 'bō', '000001'], ['復', 'fù', '100000'],
  ['无妄', 'wú wàng', '100111'], ['大畜', 'dà chù', '111001'], ['頤', 'yí', '100001'], ['大過', 'dà guò', '011110'],
  ['坎', 'kǎn', '010010'], ['離', 'lí', '101101'], ['咸', 'xián', '001110'], ['恆', 'héng', '011100'],
  ['遯', 'dùn', '001111'], ['大壯', 'dà zhuàng', '111100'], ['晉', 'jìn', '000101'], ['明夷', 'míng yí', '101000'],
  ['家人', 'jiā rén', '101011'], ['睽', 'kuí', '110101'], ['蹇', 'jiǎn', '001010'], ['解', 'xiè', '010100'],
  ['損', 'sǔn', '110001'], ['益', 'yì', '100011'], ['夬', 'guài', '111110'], ['姤', 'gòu', '011111'],
  ['萃', 'cuì', '000110'], ['升', 'shēng', '011000'], ['困', 'kùn', '010110'], ['井', 'jǐng', '011010'],
  ['革', 'gé', '101110'], ['鼎', 'dǐng', '011101'], ['震', 'zhèn', '100100'], ['艮', 'gèn', '001001'],
  ['漸', 'jiàn', '001011'], ['歸妹', 'guī mèi', '110100'], ['豐', 'fēng', '101100'], ['旅', 'lǚ', '001101'],
  ['巽', 'xùn', '011011'], ['兌', 'duì', '110110'], ['渙', 'huàn', '010011'], ['節', 'jié', '110010'],
  ['中孚', 'zhōng fú', '110011'], ['小過', 'xiǎo guò', '001100'], ['既濟', 'jì jì', '101010'], ['未濟', 'wèi jì', '010101'],
]

const trigramFor = (binary: string) => {
  const t = TRIGRAMS.find(x => x.binary === binary)
  if (!t) throw new Error(`no trigram for ${binary}`)
  return t
}

const pad = (n: number) => String(n).padStart(2, '0')

/** Refuse to overwrite anything a human has touched. */
const isDraft = (path: string) =>
  !existsSync(path) || /^status:\s*draft\s*$/m.test(readFileSync(path, 'utf8'))

function seedHexagrams() {
  const dir = join(ROOT, 'hexagrams')
  mkdirSync(dir, { recursive: true })
  let written = 0
  let skipped = 0

  HEXAGRAMS.forEach(([chinese, pinyin, binary], i) => {
    const number = i + 1
    const path = join(dir, `${pad(number)}.md`)
    if (!isDraft(path)) {
      skipped++
      return
    }
    const lower = trigramFor(binary.slice(0, 3))
    const upper = trigramFor(binary.slice(3, 6))

    writeFileSync(
      path,
      `---
number: ${number}
chinese: "${chinese}"
pinyin: "${pinyin}"
lines: "${binary}"
trigrams: { lower: "${lower.id}", upper: "${upper.id}" }
${signatureYaml(signatureOf(lower, upper))}
render: null
forbidden: []
status: draft
glossary_refs: []
judgment: null
image: null
line_texts: null
---

# ${chinese} — hexagram ${number}

The figure is \`${binary}\`, read bottom to top: ${lower.chinese} below, ${upper.chinese} above.

*Undrafted.* \`render\` is the single word a player sees, and it is a translation
decision — made in the form the [Tao Te Ching glossary](https://github.com/opencosmos-ai/taoteching)
uses, and constrained by its locks. Open with the live problem, read the
character as a picture changing over time, let cross-textual evidence argue,
name what is set aside, leave the real tension open.

The evidence is in the repository: the Chinese at \`sources/zhouyi/\`, Legge's
English beside it at \`sources/legge-1882/\` — read for construal, never for a
word — and the locks at \`sources/locks/\`. [\`method.md\`](../method.md) says how
they are used, and in what order the decisions come.

Set \`status: locked\` when the rendering is settled. Until then this file is
regenerable and the seeder may overwrite it.
`,
      'utf8',
    )
    written++
  })
  return { written, skipped }
}

function seedTrigrams() {
  const dir = join(ROOT, 'trigrams')
  mkdirSync(dir, { recursive: true })
  let written = 0
  let skipped = 0

  TRIGRAMS.forEach((t, i) => {
    const path = join(dir, `${pad(i + 1)}-${t.id}.md`)
    if (!isDraft(path)) {
      skipped++
      return
    }
    writeFileSync(
      path,
      `---
id: "${t.id}"
chinese: "${t.chinese}"
pinyin: "${t.pinyin}"
lines: "${t.binary}"
image_chinese: "${t.image}"
spectrum: "${t.spectrum}"
pole: "${t.pole}"
odd_line: ${t.oddLine ? `"${t.oddLine}"` : 'null'}
render: null
forbidden: []
status: draft
glossary_refs: []
---

# ${t.chinese} — the ${t.id} trigram

Lines \`${t.binary}\`, bottom to top. The Shuogua associates it with ${t.image}.

*Undrafted.* The image is a textual fact; its English is not, and the two are
easy to confuse here. 說卦 — now vendored at \`sources/wings/shuogua.md\`, where
chapter 11 gives each trigram its full list of images — is the oldest reading of
this trigram in existence and is still a reading. Rendering the trigram *as* its
Shuogua image would promote one Wing's gloss into the name a player sees. See
[\`method.md\`](../method.md) §5.

Note especially that 乾/天 must not become "heaven": 天地 is locked to *sky and
earth* in the vendored Tao Te Ching glossary, with "heaven and earth" forbidden.

Set \`status: locked\` when the rendering is settled. Until then this file is
regenerable and the seeder may overwrite it.
`,
      'utf8',
    )
    written++
  })
  return { written, skipped }
}

const h = seedHexagrams()
const t = seedTrigrams()
console.log(`hexagrams: ${h.written} written, ${h.skipped} left alone (not draft)`)
console.log(`trigrams:  ${t.written} written, ${t.skipped} left alone (not draft)`)
