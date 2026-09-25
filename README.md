# The I Ching substrate

Sixty-four hexagrams and eight trigrams, held as a **keyed lookup table** rather than as corpus prose — and, beside them, the public-domain evidence a rendering has to answer to.

This is deliberate, and the reasoning is recorded in the Xensō canon at [`docs/corpus-wanted.md`](https://github.com/shalomormsby/xenso) § The oracular layer: *"The I Ching is a lookup system: sixty-four hexagrams with fixed keys, consulted by a cast rather than by similarity. The chunk-and-embed pipeline serves it badly. It wants a different data shape — closer to the corpus's `quotes/`."* So it sits beside the corpus, not inside it, and it is never embedded — the corpus embedder in [opencosmos-ai/knowledge](https://github.com/opencosmos-ai/knowledge) skips it by name.


**Contributing:** you're welcome here, and much of the work needs no Chinese. See [CONTRIBUTING.md](CONTRIBUTING.md).

## The lens

**This project translates the 周易 (*zhōuyì*) as the Wings made it, and says so.** The book is two texts bound together: a Western Zhou core — 64 judgments and 386 line texts — and the Ten Wings, Warring States to Han commentary three times its length, where the trigram system, the cosmology and yin and yang all live. Every English I Ching merges the two. This one merges them **openly**, on the terms of [ADR 0016](https://github.com/opencosmos-ai/opencosmos/blob/main/docs/decisions/0016-the-i-ching-is-read-through-the-wings-and-the-lens-is-declared.md), accepted by Shalom on 2026-09-24:

1. **The core text is the only text a rendering answers to.** Every English word answers to a character in [`sources/zhouyi/`](sources/zhouyi/).
2. **The Wings are the first interpretive authority**, ahead of the three old translations — they are the oldest reading there is, and the trigram system comes from them.
3. **The reading is 王弼's (*Wáng Bì*) cross-reading** — that the Changes and the Laozi answer to one another — **but not his sweeping-away of the images.** Here the images are kept: *meet the image, grasp the meaning, forget the image* ([`method.md`](method.md) § 0).
4. **The Laozi is a check, never a source.** A reading imported from it must pass two questions — is the character in the layer being rendered, and does the English answer to that character or to the Laozi's? — or it goes in the notes.
5. **The layer is labelled.** A reading that comes from a Wing says so, so a reader can tell 1000 BCE from 300 BCE.

**The cost is chosen, not missed:** this is not the Bronze Age oracle recovered from under the philosophy. That is a different and much smaller book.

## The shape of the figures

**The 64 hexagrams are built from four spectrums, and the text states all three levels of them.** Every trigram is one pole of one spectrum; every hexagram is one trigram within (below) and one without (above). `npm run check` derives all of it from the figures and from 說卦 (*shuōguà*) itself, so it is measured rather than remembered.

**One logic defines the four: where the odd line sits.** In six of the eight trigrams one line differs from the other two, and each spectrum is that line at one height. 說卦 ch 10 names the six children by it — the first, second and third draw (一索, 再索, 三索) — and 繫辭下 (*xìcí xià*) says a trigram's pole is the kind of that line: 陽卦多陰…陽卦奇, "a yang trigram has more yin lines; it is the odd one."

| Spectrum | Odd line | Figure | Action (說卦 ch 7) | Image (說卦 ch 3) |
|---|---|---|---|---|
| sky ↔ earth · 乾 ↔ 坤 | none | `111` ↔ `000` — all firm ↔ all yielding | vigour ↔ going-along-with (健 ↔ 順) | above ↔ below — 天地定位, "they set the positions" |
| thunder ↔ wind · 震 ↔ 巽 | bottom | `100` ↔ `011` — firm at the base ↔ open at the base | moving out ↔ entering (動 ↔ 入) | strike ↔ pervade — 雷風相薄, "they rouse each other" |
| water ↔ fire · 坎 ↔ 離 | middle | `010` ↔ `101` — firm within ↔ hollow within | sinking in ↔ attaching (陷 ↔ 麗) | descending ↔ rising — 水火不相射, "they do not quench each other" |
| mountain ↔ lake · 艮 ↔ 兌 | top | `001` ↔ `110` — closed at the top ↔ open at the top | holding ↔ releasing (止 ↔ 說) | height ↔ hollow — 山澤通氣, "they exchange breath" |

*Figures bottom → top. The Chinese is the text; the English in the table is this project's reading of it, argued in [`hexagram-names.md`](hexagram-names.md#the-pattern-in-the-formation).*

**Three classes follow, and they frame the book.** **8 doubled** — one pole twice (1, 2, 29, 30, 51, 52, 57, 58). **8 crossed** — both poles of one spectrum (11, 12, 31, 32, 41, 42, 63, 64). **48 across two spectrums.** The sixteen single-spectrum hexagrams frame the received order: the upper canon opens with sky and earth doubled and closes with water and fire doubled; the lower canon opens crossed (31, 32) and closes with water and fire crossed (63, 64).

**How it is used.** Each trigram carries `spectrum`, `pole` and `odd_line` in its frontmatter, and the app gets them in `generated/iching-data.ts`. Every English name is read against its hexagram's signature — *holding within, releasing without* for 31 咸 — **as a check on the name, never as its source**: the names come from each hexagram's own lines ([`read-a-figure-through-its-spectrums`](principles/read-a-figure-through-its-spectrums.md)). **This is the Wings' reading of the figures** — the core text almost never mentions a trigram — which is exactly what [the lens](#the-lens) declares.

## The arrangement

Two halves, and the line between them is the only structural idea here worth remembering.

**Decisions** — one markdown file per unit, the frontmatter is the source of truth, the index is generated, the locks are machine-checked. This is the taoteching glossary's arrangement, copied because it works.

```
hexagrams/01.md … 64.md      the sixty-four, in King Wen order
trigrams/01-qian.md … 08-kun.md
glossary/                    one entry per ruled term — the argument behind a `render:`
glossary/INDEX.md            GENERATED — `npm run glossary`
glossary/NAMES.md            GENERATED — `npm run names`; the 64 names against the locks, read before drafting one
hexagram-names.md            the 72 names as candidates, with Shalom's rulings — a working brief
```

**The record** — what changed and when, pointing into the layers below rather than restating them.

```
CHANGELOG.md                  dated entries; the chronological spine
```

**Principles** — the rules this project learned by making particular decisions, which then govern every decision after. The index is generated and the evidence links are build-verified.

```
principles/README.md          what belongs here — and what belongs to the parent project instead
principles/INDEX.md           GENERATED — `npm run principles`
```

**Evidence** — vendored, never hand-edited, every file naming the exact edition and revision it came from.

```
sources/zhouyi/01.md … 64.md      周易 — the base text, per hexagram
sources/wings/                    the five standalone Wings, incl. 說卦
sources/legge-1882/01.md … 64.md  Legge's English, as a reference
sources/harlez-1889/01.md … 64.md de Harlez's French — the reading that disagrees
sources/mcclatchie-1876/          McClatchie's English, his Wings, his Appendix, four plates
sources/locks/                    the Tao Te Ching glossary, vendored
sources/wangbi/zhu/               王弼 周易注 per hexagram, 韓康伯 on the Wings — graded twice
sources/wangbi/lueli.md           王弼 周易略例 — the Song edition, 邢璹's notes marked
sources/shuowen/entries.md        說文解字 — every Zhouyi character Xu Shen enters, parsed
sources/PROVENANCE.md             what may live here, and on what authority
```

Generated from the decisions, and checked in:

```
generated/iching-data.ts   GENERATED — do not edit
```

It is generated *into the app* rather than read from disk, because the cast happens on the client and the fs-from-cwd pattern in opencosmos's `lib/knowledge.ts` is server-only. Sixty-four rows is a rounding error in the bundle.

```bash
npm run seed                       # one-time; refuses to clobber anything past `status: draft`
npm run import-sources -- --fetch  # vendor the sources, and verify them against the table
npm run build                      # markdown → generated/iching-data.ts
npm run check                      # the table checks itself — see Verification
npm run principles                 # principles/INDEX.md, and verify every link and every entry's shape
npm run glossary                   # glossary/INDEX.md, from each entry's frontmatter
npm run names                      # glossary/NAMES.md — the 64 names against the locks
npm run measure                    # recompute tao-te-ching-relation.md's figures; needs ../taoteching
```

**Before changing anything in `scripts/`**, load the rules the tooling has already learned:

```bash
npm run principles -- --applies tooling
```

*The commands above were `pnpm xenso:*` scripts in the opencosmos monorepo this project was extracted from.*

## What is a fact here, and what is a decision

**Facts** — seeded, and settled: the King Wen number, the character, the pinyin, the six-line figure, the trigram decomposition, and the Shuogua image in Chinese (乾為天, 坤為地, and so on). Since the import, also: the judgment, the six line texts, and the per-hexagram Wings, in Chinese, in `sources/`.

**The pinyin is standard modern pinyin**, with tone marks — Shalom, 2026-09-24. Where a name has a traditional reading that differs (噬嗑 *shì kè*, traditionally *shì hé*; 比 *bǐ*, traditionally *bì*), the file keeps the modern one and the name's glossary entry records the other.

**Decisions** — every English word. `render` is the single term a player sees, and it is a translation call made one at a time, in the form the [Tao Te Ching glossary](https://github.com/opencosmos-ai/taoteching) uses. All sixty-four are `status: draft` with `render: null` until then, and the interface shows `節 · hexagram 60` rather than inventing a name to fill the gap. **An invented name would be exactly the borrowed metaphor Xensō's design forbids, and it would arrive wearing authority.**

The slots for `judgment`, `image`, and `line_texts` in each hexagram file are the *English* ones, and they are still null. The Chinese they will render now sits in `sources/zhouyi/`, so filling them is translation work rather than data entry.

## The sources, and what each is for

Full rights reasoning, admission rules and the wanted-list are in [`sources/PROVENANCE.md`](sources/PROVENANCE.md). How a rendering is actually made from them is [`method.md`](method.md). The rules learned along the way are in [`principles/`](principles/INDEX.md), and when each arrived is in [`CHANGELOG.md`](CHANGELOG.md). In brief:

### 周易 — the base text

All 64 hexagrams from Chinese Wikisource's mainspace transcription: the 卦辭, the six 爻辭, and the per-hexagram Wings (彖傳, 大象傳, 小象傳, and 文言傳 at hexagrams 1 and 2). Public domain by age, and a faithful transcription creates no new copyright.

This is the only text a rendering answers to. Everything else on this list is an argument about it.

### 十翼 — the Wings

Five are distributed one hexagram at a time and live in `sources/zhouyi/`; five stand alone and live in `sources/wings/` — 繫辭上, 繫辭下, 說卦, 序卦, 雜卦. All ten are present.

**說卦 is the one that matters most here**, because chapter 11 is where every trigram image comes from, and `trigrams/*.md` has eight `render: null` fields waiting on it. **雜卦 is the sleeper**: sixty-four one-line glosses, the tersest reading the tradition gives each hexagram, and the closest thing in the classical corpus to the single word `render` is asking for.

### Legge 1882 — a reference, read with the overlay in view

James Legge's *The Yî King* (Sacred Books of the East, vol. XVI, Clarendon Press, 1882), all 64. **It is here to be used, and it is not a source of English.**

This file used to argue the opposite — that importing Legge would install the missionary lexicon that the taoteching [overlay audit](https://github.com/opencosmos-ai/taoteching) exists to strip. The concern is real and the conclusion was wrong, for two reasons.

**First, it was stricter than the parent project's own rule, without saying so.** `process/method.md` §3 over there settles this: *"Consult sources for meaning, never for phrasing. Reading a commentary or an old translation to understand what a line means is research. Borrowing anyone's English words is not."* Pre-1931 translations are explicitly in scope, and Legge is named in the list. He was never excluded there. He was excluded here by a rule this directory invented for itself.

**Second, the Tao Te Ching's situation and the I Ching's are not alike.** That project triangulates across eight public-domain English translations — Legge, Carus, Giles, Suzuki–Carus, Balfour, Old, Goddard, Mears. When one of them wanders, the other seven show it. The I Ching's public-domain English is three books: **McClatchie (1876)**, an Anglican missionary whose reading of the first two hexagrams as a phallic cosmogony made him a scandal in his own lifetime; **Legge (1882)**, London Missionary Society; and **de Harlez (1889, in English 1896)**, a Catholic monsignor. Wilhelm–Baynes is 1950 and closed.

Which is the point, and it is a sharper one than the old stance allowed: **every English I Ching in the public domain is missionary work.** There is no clean alternative to pick instead. You cannot escape the overlay by changing translators; you can only catalogue it and read past it — which is what the taoteching overlay audit is, and why that project reads Legge rather than refusing him. All three are now in the repository, which makes the overlay something you can measure across translators instead of something you have to take on trust.

**And what Legge gets wrong is known, finite, and already locked against.** 天 → "Heaven", 君子 → "the superior man", 王 → "the king", 罪 → "sin", 德 → "virtue". Three of those are forbidden outright by the vendored glossary; the rest are on the watchlist in [`method.md`](method.md). A predictable bias is a usable source. It is the *un*catalogued bias that contaminates, and Legge's has been catalogued for a century.

**What he is worth having.** He read the whole text with the Kangxi-era commentarial apparatus at hand and forty years of classical Chinese behind him, and his account of the line positions, the correlates, the centrality of lines 2 and 5, and the trigram logic is still the standard scholarly construal in English. Where his English is strange it is usually because the Chinese is, and that is information.

And he marks his own uncertainty, which is the habit this project calls [`divergence-stays-open`](https://github.com/opencosmos-ai/taoteching). On hexagram 50's first line — 得妾以其子, the concubine whose position is improved by her son — he sets out the commentators' reading and then adds: *"The above is what is found in the best commentaries on the paragraph. I give it, but am myself dissatisfied with it."* A translator who will write that sentence in 1882 is a translator worth reading in 2026.

**The discipline, in one line: read Legge for construal, never for English.** Every English word in a rendering answers to a character in the Chinese file beside it — that is [`renders-no-character`](https://github.com/opencosmos-ai/taoteching), and it is what makes consulting him safe.

### de Harlez 1889 — the second witness, and the one that disagrees

Charles de Harlez of Louvain, *Yih-king: texte primitif rétabli, traduit et commenté*, Brussels 1889, all 64 — in French.

**One witness is not triangulation.** Legge alone is a single reading with a known bias, and a known bias you cannot cross-check is still the only account you have. De Harlez is the cross-check, and he is a sharp one, because he rejects the premise Legge translates from. His preface opens by denying that the Yih-king is *"ce livre de divination bizarre … que certains lettrés de la Chine ont jadis présenté à leurs concitoyens"* — the strange divination book certain Chinese literati once presented to their countrymen. He reads it as an older, soberer text that the tradition later made into an oracle.

Set the two side by side on the four characters that open hexagram 1, 元亨利貞:

| | |
|---|---|
| Legge | *"what is great and originating, penetrating, advantageous, correct and firm"* |
| de Harlez | *"l'origine, le progrès, l'affermissement et l'achèvement des êtres"* |

Neither is ours, and the distance between them is the size of the decision. That is what a reference base is for.

**Being in French is a feature.** `renders-no-character` is what makes Legge safe to read; de Harlez is safe structurally, because he has no English phrase to leak.

**The standing caution:** his subtitle is *texte primitif rétabli* — the primitive text **restored**. He reorders, emends, and marks passages as interpolations. **He is a reading, never a witness**; `sources/zhouyi/` is the witness. Each file says so.

**What is still out.** Val d'Eremao's English of de Harlez (1896) was serialised in a journal that printed only some chapters, and the complete separate volume is not scanned. Wilhelm's German (1924) is genuinely public domain, but the only transcription available is set from the 1987 Köln edition and fails the admission rules on the *printing*, not on the text. Both searches are recorded in [`sources/PROVENANCE.md`](sources/PROVENANCE.md) so nobody repeats them.

### McClatchie 1876 — the first English I Ching, and the overlay explaining itself

Thomas McClatchie's *A translation of the Confucian 易經*, Shanghai 1876, all 64 — plus three texts nothing else here holds in English, and four plates.

**He is the least reliable translation of the three and the most valuable document.** Both things are true and they are not in tension. Read as a construal he is an outlier; read as evidence he is the clearest thing in the corpus.

**What he gives the translation work.** 君子 is **"the Model Man"**, seventy-two times — a term not in the Tao Te Ching glossary, needing an entry from scratch, and now holding three competing renderings instead of Legge's one. 元亨利貞 is **"Origin, Luxuriance, Benefit, and Completion"**, a third shape beside Legge's and de Harlez's. And he labels the lines by position and polarity — "First-Nine", "Second-Six" — which is the most transparent of the three schemes and the closest to what 初九 and 九二 actually say.

**What he gives the overlay audit — and this is the real find.** The audit holds that the missionary translators "translated with the only religious vocabulary they had, and that vocabulary carried a cosmology inside it." **McClatchie does not translate that way by accident. He argues for it.** His Appendix sets the Yih King beside Greek and Roman cosmogony — Θεός, Deus, the Demiurgus, Plato's world-soul — and concludes that 神 *"signifies… God, Gods"* and *"never means 'Spirit' in any Chinese book whatever, classical or otherwise."* 神 is locked in the vendored glossary. [`sources/mcclatchie-1876/appendix.md`](sources/mcclatchie-1876/appendix.md) is the primary document of the thing that lock exists to keep out.

**Three Wings in English.** He translated the 繫辭傳, the 說卦傳 and the 序卦傳 as well as the sixty-four. Those are vendored separately, and they are the only English this project holds for texts it otherwise has only in Chinese — which matters most for 說卦, since the eight `trigrams/*.md` files answer to it.

**Four plates**, in [`sources/mcclatchie-1876/figures/`](sources/mcclatchie-1876/figures/) with a manifest in `plates.yaml`: the 先天 Fu Xi and 後天 King Wen arrangements of the eight trigrams with their compass points and family relations, the five colours, and — directly on the open question — a plate laying out 元亨利貞 as four phases in nature rather than an oracle's verdict.

**The grade is the lowest here, and it is marked.** A scan of a photo-reproduction, OCR'd locally; the printed numbers are so damaged that sections are located by page order and the numbers used only to check it. 51 of 64 give all six line paragraphs cleanly; the rest lost a label and run one line into the next. Every file says which. And the Chinese half of this bilingual edition is **not transcribed** — see [`sources/PROVENANCE.md`](sources/PROVENANCE.md) for why that is a rule and not a shortfall.

**It is read twice, by two engines, and the disagreements are kept.** The English is Tesseract's reading; an independent Apple Vision pass corroborates it word by word. Where both engines read a word the same way — 79.8% of the sixty-four — the error rate is 3.9%; where they differ, 28%. That first pass disagreed at 5,039 positions. Most have since been settled — by the book's own vocabulary, built only from words both engines read identically, or by choosing between the engines against the scan — and 96.5% of the words are now corroborated. The rest, **1,075** at the last import, are listed in [`sources/mcclatchie-1876/disputed.yaml`](sources/mcclatchie-1876/disputed.yaml), whose `summary:` holds the live count, **none of them resolved**, because choosing between two readings needs the scan open. Every hexagram file carries its own `ocr_disputed_words:` count. This is the only source here with a measured error rate rather than an asserted grade, and it is the worst-scanned one — which is the right way round.

### The locks

`sources/locks/terms.yaml` is vendored verbatim from the Tao Te Ching glossary, and `sources/locks/README.md` is generated from it — a table of every locked term measured against this book.

**39 of the 50 locked terms occur in the Zhouyi.** 天 appears 122 times and is locked away from "Heaven". 王 appears 45 times and is locked away from "king" — a word Legge uses on nearly every one of them. That is not a hypothetical conflict; it is the single most frequent decision this project will make, and it is already settled.

## Verification

`npm run check` asserts, on every run, reading the frontmatter rather than the generated file:

- **Bijection** — 64 distinct figures covering all 64 possible, numbered 1 … 64 once each.
- **The King Wen pair invariant** — consecutive pairs (1,2), (3,4) … (63,64) are each other's inversions, except the eight figures that are their own inversion, which pair by complement instead. A single transposed row breaks it, which makes the table self-checking and worth more than proofreading. A swap *within* a pair cannot break it — 59 and 60 are each other's inversion — which is why the next two checks are not redundant.
- **Trigram agreement** — the eight trigrams cover the eight three-line figures, every hexagram names two that exist, and lower ++ upper equals the figure, every time.
- **The four spectrums** — every trigram's `pole` and `odd_line` are derived from its figure and must match; each `spectrum` is two complements, one yang and one yin, with the odd line at the same height; the four are 說卦 ch 3's pairs of images, read out of `sources/wings/shuogua.md`; the classes come out 8 doubled, 8 crossed, 48 across; and the sixteen single-spectrum hexagrams frame both canons. See [The shape of the figures](#the-shape-of-the-figures).
- **The founding cast** — the six throws Shalom logged on 2024-02-23 asking *"What will help bring Xenso into the world?"*, recorded in the Xensō archive and never resolved, give lines 9 7 8 8 7 8, which must come out at hexagram 60 moving at line one, becoming 29. It also asserts that reading those lines top-down would give 59 instead — because **lines read bottom to top**, and getting that backwards produces a plausible wrong answer with no error to notice.
- **Every `glossary_refs:` resolves, and agrees** — each names a real entry in `glossary/`, and the `render:` here is the one the entry rules. The word lives in two places by design (see [`glossary/README.md`](glossary/README.md)), so the join is checked rather than trusted.
- **The locks hold** — every English field (`render`, `judgment`, `image`, `line_texts`) is tested against the file's own `forbidden:`, its glossary entry's, and every lock in [`sources/locks/`](sources/locks/README.md), by the parent's `check_locks.py` rules: substring, case-sensitive only where the forbidden word is written with a capital, and a lock's word an error only where its character is in that hexagram's Chinese. Elsewhere it is reported, not failed.
- **The generated file is current** — `generated/iching-data.ts` agrees with the frontmatter row for row, so the copy the app carries cannot drift from the decisions unnoticed.

Each of these has been seen to fail: a transposed row across pairs, a swap within a pair, a wrong trigram, a rendering edited without a rebuild, a dangling `glossary_refs:`, a rendering its entry does not rule, a word from its own `forbidden:`, *Providence* for 乾, and — for the spectrums — a flipped pole, a moved odd line, a trigram on the wrong spectrum and a spectrum named yin-first each exit non-zero.

**The cast engine is checked where it lives.** Coin arithmetic, the non-uniform odds (1/8, 3/8, 3/8, 1/8 — not even, and that check is what says so), moving-line resolution and `relating: null` when nothing moves are properties of `lib/iching.ts` in opencosmos, not of this table, and `pnpm xenso:check-iching` in [opencosmos](https://github.com/opencosmos-ai/opencosmos/blob/main/scripts/README.md) still tests them — against the app's copy of the generated file.

`npm run import-sources` adds two more, and fails the run rather than writing an unverified file:

- **Trigram agreement, from outside.** Each Zhouyi page prints its own decomposition — 兌下坎上, *dui below, kan above* — which must equal the `trigrams:` in our table. **64 of 64.**
- **The figure, read back out of the line labels.** The classical labels name each line's polarity: 九 is a solid line, 六 a broken one, so 初九 九二 六三 六四 九五 上六 spells `110010` and nothing else. Reassembling every figure from its labels checks **all 384 line values against a source that has no idea what our table says.** This is the check that a transposed row cannot survive, and it now passes 64 of 64.

## What is not here, and why

**The excavated witnesses** — the Mawangdui silk Zhouyi (1973), the Fuyang bamboo (1977), the Shanghai Museum Chu slips (1994) — are not vendored, and the reasoning is the taoteching project's, unchanged: reconstructing damaged and missing graphs is genuine editorial work by living scholars, and reproducing a reconstruction reproduces the scholarship. **Record the facts instead.** "The Mawangdui Zhouyi runs the hexagrams in a different order entirely" is a fact about a text and facts are not copyrightable. See [`sources/PROVENANCE.md`](sources/PROVENANCE.md).

**Legge's footnotes** — his commentary, as opposed to his translation — are on the wanted-list rather than in the repository. They are where most of his construal actually lives, and most of his overlay too.

**Any modern translation, of anything, for any reason.** Wilhelm–Baynes included.

**This is a rule about files, and it reaches no further.** It says which editions may be vendored, on rights and provenance. It places **no English word out of reach** — not *lake*, not *the judgment*, not anything a modern translator happens to have used. A word is ruled out only when something is wrong with the word, and the reason is always a property of the word rather than of its author. See [`principles/convergence-is-evidence.md`](principles/convergence-is-evidence.md), which exists because this exact conflation was made on 2026-09-12.
