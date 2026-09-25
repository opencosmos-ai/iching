# Changelog — the I Ching substrate

Notable changes to this repository. The root [`CHANGELOG.md`](https://github.com/opencosmos-ai/opencosmos/blob/main/CHANGELOG.md) covers the monorepo; this one covers a directory that has its own method, its own admission rules and its own principles, and whose changes would otherwise be legible only by reading a whole session back.

**Last updated:** 2026-09-24

## What goes here, and what does not

**The rule across every changelog in this ecosystem is one change, one changelog — the one that owns the decision.** The system is written down once, in the [opencosmos root `CHANGELOG.md`](https://github.com/opencosmos-ai/opencosmos/blob/main/CHANGELOG.md). This section says only what it means here.

### Relative to the root changelog

The root records **the monorepo's work history** — apps, infrastructure, Cosmo, and the knowledge corpus taken as a whole. This file records **one sub-project inside that corpus**, which has its own method, its own admission rules and its own principles.

| | Root | Here |
|---|---|---|
| A source vendored, at what coverage and grade | — | ✅ |
| A stance reversed about how this project works | — | ✅ |
| A rule this project learned | — | ✅ (pointing at `principles/`) |
| The importer, the OCR tool, the scripts behind it | — | ✅ |
| **That this project exists, and when it reached a milestone the monorepo should know about** | ✅ | ✅, in full |
| Anything that changes the app, the corpus pipeline, or another package | ✅ | — |

**The test: would someone not working on the I Ching need to know?** If yes it goes to the root — in a sentence, with a link here, never in full. The 2026-09-11 root entry naming this project is the one entry that exists in both, and it says so.

### Relative to the layers beside it

This is a **chronological spine that points into them**, never a second copy.

| | Lives in |
|---|---|
| Why a source may be vendored, and its grade | [`sources/PROVENANCE.md`](sources/PROVENANCE.md) |
| A rule learned, with its trigger and evidence | [`principles/`](principles/INDEX.md) — each entry carries its own `since:` |
| How a rendering gets made | [`method.md`](method.md) |
| What each source is and what it is for | [`README.md`](README.md) |
| Coverage, counts, and what failed to extract | the run output of `npm run import-sources`, and each file's frontmatter |

**Counts quoted below are a snapshot on the date of the entry**, not a table anyone maintains. The importer prints the live numbers; a hand-kept copy of a derivable list is precisely what the inherited `edited-or-generated` principle forbids.

**Entries are milestones, not commits.** `git log` holds every change; this holds the ones that changed the shape of the work.

---

## 2026-09-24 — 王弼's 周易注 vendored, graded twice

The commentary that made the Changes the received text, and that the parent project's Wang Bi continues on the Laozi. WORKLIST B8.

- **[`sources/wangbi/zhu/`](sources/wangbi/zhu/)** — `npm run import-sources -- --only wangbi`. The same Song printing as the 略例, 228 scan pages: one file per hexagram with Wang Bi's notes in place, and one per Wing with **韓康伯's** — the printing names him at the head of 卷七–卷九, and the importer checks it.
- **Divided where the printing divides it**, by the 64 trigram labels it sets after each figure, taken in order and checked against our table. 63 agree; 62's reads 良 for 艮, OCR damage recorded and left as read. The same order-and-check found that 29 坎 prints its label above-first, and that a note in 益, 損上益下, has a label's shape.
- **Graded twice.** The text against `zhouyi/`: mean 97.1%. The notes — which the received text cannot grade, and which on unproofread pages are visibly the worst-read part — against Wikisource's typed 周易正義: mean 92.1% for Wang Bi, 85–88% for 韓康伯. Each file carries both.
- **Grading it found a defect in our own base text** (B9): the vendored Zhouyi has simplified graphs — 密云不雨, 剛柔济也, 月几望. Not fixed here; `sources/` is never hand-edited.
- **The brief's § 2 now rests partly on text.** That the 周易注 covers the 彖, 象 and 文言 and stops, and that 韓康伯 supplied the rest, is what the edition's own 卷 headings say. The biography and dating are still memory.

## 2026-09-24 — 王弼's 周易略例 vendored, and § 8 of the brief quotes it

[`tao-te-ching-relation.md`](tao-te-ching-relation.md) § 8 built an argument on 得意忘象 and said, three times, that it was quoting from memory. WORKLIST B6.

- **[`sources/wangbi/lueli.md`](sources/wangbi/lueli.md)** — `npm run import-sources -- --only wangbi`. The 四部叢刊 facsimile of the Song printing, 周易 卷十, all seven chapters, with 邢璹's Tang notes kept in place and marked 〈…〉, and every scan page's revision recorded.
- **Graded, because it is unproofread.** Wikisource's Page: text is bot OCR. Its typed mainspace 周易略例 names no edition and runs 邢璹's notes into Wang Bi's text unmarked — so it is not vendored, and is used instead to grade the OCR: **93.4% to 99.7%** of each chapter's Wang Bi is in the typed witness, in order, and the import fails below 90%.
- **§ 8 now quotes the text, and the text corrects the slogan.** 得意忘象 is not in it. Wang Bi writes 得意而忘象, and later 得意在忘象 — the four-character form is the compression that travelled, which is the brief's own point made by the source. The chapter also names the Han apparatus it sweeps — 互體, 卦變, 五行 — so § 2's claim about 掃象 now rests on his words.
- **The 周易注 is still owed** (B8): the same printing, over two scan files, and a larger job — the base text interleaves, and the notes are 韓康伯's as well as his.

## 2026-09-24 — 說文解字 vendored: the third corner

[`method.md`](method.md) §2 argues a rendering from four corners, and the third — the characters themselves, in Xu Shen's c. 100 CE analysis — had no source here; the glossary argued *"from the graph"* and said so. WORKLIST B2.

- **[`sources/shuowen/entries.md`](sources/shuowen/entries.md)** — `npm run import-sources -- --only shuowen`. Xu Shen's entry for **1,228 of the 1,374** characters in the core text and the Wings, each split into semantic (从X) and phonetic (X聲) components by his own formulas. 坤 is 地也, *the earth*, from 土 and 申; 坎 is 陷也, *a pit* — the same gloss 說卦 gives.
- **The parser is the Tao Te Ching project's, ported and held to it.** [`scripts/shuowen.ts`](scripts/shuowen.ts) is its `import_shuowen.py` in TypeScript, and every import re-runs the port over the Laozi and fails unless it reproduces that project's table row for row. It did on the first run — 763 rows. So both books read Xu Shen the same way, and a fix there is visible here.
- **No old-form mapping was added.** The 146 unmatched include 雷, entered as 靁, and 无 and 亨 — each wants the verification the parent gave its 57 mappings before it joins them.

## 2026-09-24 — The 64 names, against the locks, before any is drafted

[`glossary/NAMES.md`](glossary/NAMES.md), generated by `npm run names` ([`scripts/build-name-concordance.ts`](scripts/build-name-concordance.ts)) — WORKLIST A9. A concordance in the parent's sense: it shows the evidence and decides nothing, and CI fails only if it is stale.

- **6 of 64 names carry a locked character** — 大有, 大畜, 大過, 大壯 through 大 (and 大有 through 有 as well), 明夷 through 明, and 无妄 through 无.
- **53 of 64 recur as a word in their own judgment or line texts**, beyond the title. A name has to work inside a sentence as well as above one, and the table says which do.
- **None of the three translators gives an English name to compare** — Legge, de Harlez and McClatchie all romanise. That is recorded rather than worked around.
- **无 is not 無, and the lock is written on 無.** The Zhouyi writes the negative 无 158 times in the core and 138 in the Wings, against 2 and 5 for 無 — so the lock on 無 has reached almost nothing in this book, including every 无咎. Whether it binds 无 is a ruling, not a fold, and it is now WORKLIST A11.

## 2026-09-24 — The brief's measurements have a script, and it corrected them

[`tao-te-ching-relation.md`](tao-te-ching-relation.md) § 3–5 argues from counts — that the bridge between the books runs through the Wings, that yin-yang is not the core text's idea, that 君子 should be ruled here first. They were computed once, by hand, and nothing could recompute them.

- **`npm run measure`** — [`scripts/measure-two-corpora.ts`](scripts/measure-two-corpora.ts) reads the Daodejing from the sibling `../taoteching`, and the core text and Wings from `sources/`, and recomputes every figure the brief states — 87 of them, listed in the script beside the sentence that makes each. `--check` fails if the brief disagrees; seen to. Not in CI, which does not check out the sibling.
- **Its first run found 15 wrong.** The hand count's Daodejing was 138 characters short (5,158 against 5,296), which moved every Daodejing count and the shared-graph figures by a little; 君子 is 108 in the Wings, not 109. **No finding moved but one:** § 5 said 時, *the right moment*, never appears in the Laozi and that timing *"is simply not in the Laozi's vocabulary."* It appears once — 動善時, ch 8, one of seven things the masterful are masterful at. The paragraph now gives the count and leaves open what it means: a real difference in concern, or — as with 謙 — a shared idea without the shared word, which ch 64's *act on it before it exists* would support.
- **The hand count's Daodejing could not be identified.** No rule applied to the text reproduces 5,158, and dozens of pairs of dropped chapters would. That is the case for the script, made by the thing it replaces.

## 2026-09-24 — The glossary is indexed, and the locks are checked by code

The README said *"the index is generated, the locks are machine-checked,"* and neither was true here: `glossary/` had no index, and the parent's locks were enforced by reading. Nothing checked that a `glossary_refs:` named a real entry either, or that the word in `render:` was the word its entry argued for.

- **`npm run glossary`** — [`scripts/build-iching-glossary.ts`](scripts/build-iching-glossary.ts) writes [`glossary/INDEX.md`](glossary/INDEX.md) from each entry's frontmatter, the parent's `build_index.py` arrangement; `--check` fails if the index is stale, and CI runs it. No `terms.yaml` — the renderings the locks are checked against already live in `render:`.
- **`npm run check` holds the join** — a `glossary_refs:` naming no entry fails, and so does a `render:` its entry does not rule.
- **`npm run check` holds the locks** — every English field against the file's own `forbidden:`, its entry's, and every vendored lock, by the parent's rules: substring, case-sensitive only where the forbidden word carries a capital, and a lock's word an error only where its character is in that hexagram's Chinese. The one rule not carried over is the sentence-initial capital, because a `render:` is a name.
- **Seen to fail** — a dangling ref, a rendering its entry does not rule, a word from its own `forbidden:`, *Providence* for 乾 (the lock on 天), and *the Cosmos* in hexagram 1, where both 天 and 天地 are in the Chinese, each exit non-zero. Only the eight trigrams have English yet, so today it guards eight words; it is built for the 512 in A8.
- **The locks re-vendored, at 50** (C10). 治 *govern*, 亂 *disorder* and 身 *body* are new, and 39 now bind in the Zhouyi against 36. The parent moved its flexions — a lock's chapter-scoped secondary English — out of `render:` into their own field, so a plain re-vendor would have dropped *seize* from 執 and *supreme authority* from 王; the table now shows them as the parent's own index does, `grasp · *seize* (ch 74)`, with the chapters named as the Tao Te Ching's. Counts that were hand-kept copies of this — in `glossary/README.md` and a principle — are gone rather than updated.

## 2026-09-24 — The vendored sources regenerate from this repository

Nothing had shown that `sources/` could still be rebuilt here since the extraction. The importer came across, but its offline inputs — the Wikisource pages, the McClatchie PDF, both OCR passes and the saved scan-adjudication calls — are gitignored, and they stayed behind in the opencosmos checkout.

- **Re-run offline, every source except the locks, and the text is byte-identical.** zhouyi, wings, legge, harlez and mcclatchie each verified; across 268 files the only change was `transcribed:`, which the importer set to the day it ran. **It no longer does** (C11): a file whose text is unchanged is not rewritten, so its stamp moves only when the text does, and a no-op re-run leaves the tree clean — seen both ways, including a tampered file being put back. What did change was three McClatchie YAML headers, whose `scripts/xenso/` and `knowledge/iching/` paths the importer had already been corrected to stop writing — so those are now its output again rather than a hand-edit.
- **The locks were not re-vendored in this pass, because that is a change of content** — the parent had moved on. They are, in the entry above, on Shalom's call.
- **The last `pnpm xenso:*` commands and `scripts/xenso/` paths are gone** from the script headers, `README.md`, `sources/PROVENANCE.md` and the importer, which also looked for the parent at `../shalomormsby/taoteching`. `pnpm xenso:check-iching` stays where it is named: it is still opencosmos's command.
- **The two OCR measurements are reconciled** (C9). The full-body figures — Vision 19.8%, Tesseract 10.5%, 3.9% where they agree — are current; the 13.7% / 8.7% / 2.8% in `ocr-consensus.ts`'s header came from an earlier, smaller sample, and `PROVENANCE.md` now says so.

## 2026-09-24 — The table checks itself again

`README.md` → *Verification* described five checks under `pnpm xenso:check-iching`, and nothing in this repository ran any of them. The script had not been lost — it is still in opencosmos, at `scripts/xenso/iching-check.ts`, left there deliberately because it imports the cast engine. But half of what it checks is this table, and it checked the app's *copy* of the table, so a wrong row here would pass until someone rebuilt and copied it across.

- **`npm run check`** — [`scripts/check-iching.ts`](scripts/check-iching.ts). The table half, reading the frontmatter rather than the generated file: bijection, the King Wen pair invariant, trigram agreement, and the founding cast (60 becoming 29, and 59 if read top-down).
- **One check the original did not have: `generated/iching-data.ts` must match the frontmatter**, row for row. It is the file the app carries, and a rendering edited without `npm run build` would otherwise reach nobody, silently.
- **Seen to fail, not only to pass** — a transposed row across pairs, a swap within a pair (which the pair invariant cannot see, since 59 and 60 are each other's inversion), a wrong trigram, and an unbuilt edit each exit non-zero. [An instrument is not a witness to itself](principles/an-instrument-is-not-a-witness-to-itself.md).
- **The engine half stays with the engine** — coin odds, moving-line resolution and random casts are properties of `apps/web/lib/iching.ts`, and opencosmos's check still tests them. The README now says which is where.

## 2026-09-24 — The principles are brought onto the parent's new shape, and made to run

The Tao Te Ching project changed the form of a principle this week, and this directory's README promised the form was *"identical to the parent's, and the generator enforces it."* That promise had just become false — so this is the inheritance kept, not a new decision.

- **All thirteen on the new shape**: *Why this holds · Why this principle exists · How it is implemented · Where it does not fire · What it obliges*. **The failure story is told once**, in *Why this principle exists*; five stories that sat in *Why this holds* moved there, and the rest of each entry says what the rule is and how it runs. The shape is the parent's — [its README](https://github.com/opencosmos-ai/taoteching/blob/main/process/principles/README.md#the-shape-of-an-entry) — and `principles/README.md` now says only where this project differs.
- **How it is implemented, for all thirteen** — grounded in what the scripts actually do: the importer's grade tests, `lines_found:` and `located_by:`; `ocr-consensus.ts`; the McClatchie Chinese-pages manifest. Most rules are judgment, and now say so.
- **Every kind of work loads its principles where it begins.** Nothing did before: this repository has no skills and no `CLAUDE.md`, so no principle reached anyone. Now `npm run principles -- --applies <scope>` sits in `method.md` § 0 (process) and § 2 (drafting), `glossary/README.md`, `sources/PROVENANCE.md` → *The admission rules*, and `README.md` (tooling). `notes` is dropped from the scopes — there is no notes layer here.
- **The build enforces all of it.** `npm run principles -- --check` refuses an entry missing a section, out of order, naming a `check:` tool its implementation does not mention, or applying to work nothing loads, and refuses a scope nothing loads. Any failure now writes nothing — before, the index was written even on failure.
- **`iching-principle-entry`**, in `.claude/skills/` — the parent's procedure bound to this repository's paths, scopes and build, with the reasoning linked rather than copied. Named apart from the parent's `principle-entry` so the two never compete in a workspace that opens both.
- **Stale names from the extraction, fixed where this work touched them**: the build is `npm run principles`, not `pnpm xenso:principles`; four `check:` fields named `xenso:` scripts; and *"the Tao Te Ching project's twenty-seven"* was a hand-kept count of another repository's directory, which now holds thirty. The rest is `WORKLIST.md` C8 — and C7, because **`check-iching` did not come with the extraction at all**.

## 2026-09-12 — The first English, and the rule that got it there

**Eight words after three sessions of instruments.** The eight trigrams now carry a `render:` —
**sky · earth · thunder · wind · water · fire · mountain · lake** — and eight `glossary/` entries
argue them. It is the project's first English, and it was decided **as one decision rather than
as eight**, which turned out to be the finding worth keeping.

- **`glossary/` exists, on the Tao Te Ching model.** Eight entries, the parent's frontmatter, and
  the same `status: locked` discipline. Each names what the rendering **loses** as well as what it
  carries: *sky* is thinner than 乾's 健 (vigour), *lake* drops 澤's other half — 恩澤, beneficence
  — and both seams are recorded rather than argued away.
- **The rendering is the image, not the action, and that ruled on all eight at once.** 說卦 gives
  every trigram an action (ch 7: 乾，健也) and an image (ch 11: 乾為天). The 大象傳 bound into every
  hexagram runs on the **images** — across the 64 they name 天 18 times, 地 17, 雷 15, 山 15, 澤 15,
  水 11, 風 10, 火 10, against 健 once, 順 twice, 入 twice, 麗 once, and 動 陷 止 說 not at all. That
  count forbids *the Gentle*, *the Receptive*, *the Abysmal* and *the Joyous* in a single stroke.
- **巽 → `wind`, and the five 木 hexagrams keep their wood.** The dilemma was posed wrongly: it
  assumed `render:` had to carry the image for every hexagram the trigram appears in. `image:` in
  each hexagram file is a **separate rendering of a separate sentence**, so 鼎's 木上有火 is a
  cauldron on a **wood** fire and 渙's 風行水上 is wind over water. Queued in `WORKLIST.md` as part
  of A8 for 28, 46, 48, 50 and 53.
- **澤 → `lake`, after the first ruling was made for the wrong reason.** It had been pushed toward
  *marsh* on the ground that *lake* is Wilhelm's — which fused the admission rule about **files**
  with a rule about **words**, and no word is out of reach because a previous translator used it.
  Re-argued on the fifteen images: 47 困 澤无水 shows 澤 is the hollow rather than the water, and
  *lake* survives thirteen of the fifteen. → [`convergence-is-evidence`](principles/convergence-is-evidence.md), and `method.md` §2 was
  rewritten around **derivation** the same day.
- **Two new principles, both `active`, and both about drafting** — the first entries here that
  are. [`a-closed-set-is-one-decision`](principles/a-closed-set-is-one-decision.md): where a term
  belongs to a fixed set the reader meets as a system, its English is constrained by the other
  members, and **the set's coherence is evidence**. And
  [`the-8-trigrams-are-arranged-in-4-pairs`](principles/the-8-trigrams-are-arranged-in-4-pairs.md):
  **a text that arranges its own terms has already ruled on them.** 說卦 ch 3 —
  天地定位，山澤通氣，雷風相薄，水火不相射 — sets the eight as four pairs, every slot holding
  something you can point at in a landscape, and 木 appears in no arrangement 說卦 makes. A list is
  a catchment; an arrangement is a claim with a shape.
- **Shalom found the pattern before the text confirmed it.** The four-pairs passage was not what
  produced the ruling — it validated one already made from the seven renderings in hand. That
  order is why the second principle argues the **general** case and does not simply restate 巽.
- **A citation error the new entry surfaced:** 橈萬物者，莫疾乎風 is 說卦 **ch 6**, not ch 8, in two
  files that cited it. Ch 6 also makes the four-pair grouping a **second time** —
  故水火相逮，雷風不相悖，山澤通氣 — which is stronger evidence for *wind* than had been recorded.
- **The `applies:` balance has started to move.** 13 principles, split 11 sources · 7 drafting ·
  6 process · 5 tooling · 1 glossary. `principles/README.md` names that ratio as the diagnostic:
  while it does not shift toward `drafting`, this project is building instruments rather than
  translating. The three newest entries are all drafting.
- **And a research brief on the sibling project — [`tao-te-ching-relation.md`](tao-te-ching-relation.md).**
  The two corpora were measured against each other for the first time: the Laozi shares **34.6%** of
  its graph inventory with the Wings and **24.5%** with the Zhouyi core, and 道 appears 70 times in
  the Laozi, **4** in the core, 104 in the Wings. 天地, 萬物, 常, 善, 器, 仁 and 極 occur in the core
  **not once**. 陰 appears once in the entire core text and 陽 not at all. **The bridge between the
  two books runs through the Wings**, which is where 說卦 ch 3 lives — so the four-pairs ruling
  landed on the one layer where they genuinely touch. The brief is half prior art (王弼 wrote the
  standard commentary on *both*, and the vendored Laozi is his recension) and half a cautionary
  list of six ways to overfit the resemblance, the governing one being
  [`a-source-shaped-like-your-answer`](principles/a-source-shaped-like-your-answer.md).
- **Both projects had already written "four pairs," independently.** The Tao Te Ching project says
  it at its chapter 23, glossing 河上公's 同聲相應，雲從龍，風從虎，水流濕，火就燥 — which is the
  文言傳 of hexagram 1, vendored here at `sources/zhouyi/01.md`. Neither cited the other.
- **A stance, at the head of `method.md` as § 0 — *"Meet the image. Grasp the meaning. Forget the
  image."*** 王弼's 得意忘象 with the beat his slogan drops, because you cannot forget what you never
  met. **Meeting is the translator's work; grasping and forgetting are the reader's** — and every
  word on a `forbidden:` list is a translator who did all three on the reader's behalf and shipped
  the residue. Deliberately **not** a principle: it has no trigger, or rather fires on everything,
  which is `principles/README.md`'s own test for what does not belong there.
- **[ADR 0016](https://github.com/opencosmos-ai/opencosmos/blob/main/docs/decisions/0016-the-i-ching-is-read-through-the-wings-and-the-lens-is-declared.md),
  `Proposed` — the Wings are the lens, and the lens gets declared.** The trigram renderings already
  assumed an answer to a question nobody had asked: is this the Western Zhou divination text, or the
  book the Wings made of it? They are measurably different books. Reading the Changes through Daoist
  metaphysics is an **overlay** — a canonical one, and still the same category as Legge's Confucian
  frame. `WORKLIST.md` **A10**, blocked on Shalom.
- **Still nothing drafted below the trigrams.** 64 hexagram renderings, all `render: null`. The
  order is set by `method.md` §7 and the next unit is the verdict vocabulary, decided as one set.

## 2026-09-12 — McClatchie read a second time, and the instruments get measured

Shalom opened `sources/mcclatchie-1876/04.md`, saw `**Sixtli-Nine`, and asked how bad it was. It was bad: roughly **one word in five** across the English body. The fix is not a better setting, it is **a second engine and a refusal to blend the two.**

- **Tesseract is the primary now, on a measurement and nothing else.** Over all 462 English body pages, scored by the share of words no expanded dictionary recognises: **Apple Vision 19.8%, Tesseract 10.5%.** New [`scripts/ocr-tesseract.sh`](scripts/ocr-tesseract.sh) produces it — `brew install tesseract`, which sits outside the pnpm workspace and so cannot regenerate the shared lockfile that has broken sibling apps' builds before.
- **Vision is kept, because agreement between two separately-trained engines is worth more than either engine's opinion of itself.** 72.7% of the body is read identically by both, and **inside that agreement the error rate is 3.9%** — while the 27.3% they disagree about carries **73% of all the remaining damage.** Corroboration does not repair anything; it says where to look.
- **`disputed.yaml` — 5,039 word-level disagreements across the sixty-four, none resolved.** Both readings, the page, and enough context to find the spot on the scan. New [`scripts/ocr-consensus.ts`](scripts/ocr-consensus.ts) (`pnpm xenso:ocr-consensus`) does the same for any two passes. Each hexagram file carries its own `ocr_disputed_words:`.
- **Automatic resolution was considered and rejected, and that is the load-bearing decision here.** Preferring whichever engine read a dictionary word would lower the measured error and make the text worse. Hexagram 4's Second-Nine read *"To marry now is **alas** lucky"* — fluent, and wrong for *also*. It now reads *"is **alse** lucky"*: still wrong, visibly so. **A source at this grade should announce its damage**, and an automatic fluency preference is a machine for hiding it.
- **A bug the second engine exposed: 39 of 147 Chinese pages were being vendored as English.** `isChinesePage()` wanted `[NM]` directly after `CHI`, so the common "CHINESP TEXT." never matched, nor did a running head the scanner split across lines. Their columnar gibberish had been merging into the facing hexagram's text since the first import. The test now takes the head from *any* witness, or an English word count below 20 — an English page yields a median of 172 words here and a Chinese page a median of 1, with nothing in between.
- **All 64 section headings are found, where the first pass found 61 and inferred 3.** Vision finds 61 and Tesseract 56; between them they have every one. `MC_HEADING` was widened for Tesseract's trailing scanner furniture, and `looksLikeDiagram()` replaces an ever-growing alternation with a letter-fold and an edit distance of two — extending that regex one engine at a time is how it becomes a liability.
- **Structure recovered, because better characters find more boundaries.** All six line texts in **51 of 64** (was 40); 大象傳 split out in **57** (was 45); the full section set in **49** (was 39); the worst file went from 2 of 6 lines to 4. 135 inline trigram figures marked, against 102. Total text vendored rose 69,677 → 71,533 words, so none of this came from dropping anything.
- **The resolution hypothesis was wrong, and the refutation is written down so nobody repeats the afternoon.** The rasters are 600 DPI and the first pass rendered them at 216, which looks like a plain mistake and is not: the source is bitonal, downsampling anti-aliases the glyphs into what the engines expect, and **600 DPI scored 16.6% against 216 DPI's 13.7%.** Everything from 120 to 300 was noise. `ocr-pdf.swift` now derives the scale from the page's own embedded raster and reports it, takes `--dpi`/`--revision`/`--no-langcorrect`/`--words`, and **no longer destroys out-of-range pages on a partial `--from/--to` run** — the old writer silently clobbered the other 488.
- **New principle, provisional — [`an-instrument-is-not-a-witness-to-itself`](principles/an-instrument-is-not-a-witness-to-itself.md).** Vision reported a mean confidence of **0.98** on text where one word in five was wrong. A tool's account of its own accuracy is not evidence, and neither is a mechanism you can explain; both are hypotheses. It is provisional because both its cases come from this one investigation.
- **The Chinese half is still not transcribed.** Nothing here changes that rule, and Tesseract was run `-l eng` only.

## 2026-09-11 — Two more witnesses, and the project starts keeping its own principles

The evidence layer went from one English translation to three translations and a plates section, and — more consequentially — the work started producing **transferable rules faster than the existing files could hold them.** The Legge reversal's actual lesson was buried in a README section about Legge; the reason the Chinese is not transcribed was buried in a PROVENANCE paragraph about McClatchie. Both are rules that govern hexagrams nobody has looked at.

- **de Harlez 1889 vendored — `sources/harlez-1889/`, 64 of 64.** *Yih-king: texte primitif rétabli*, Brussels, from the Princeton Theological Seminary scan. In French, deliberately: he opens his preface by **denying the premise Legge translates from** — that the book was ever a divination manual — which puts him on the far side of the deepest open question in the project (貞, 亨, 孚). A source in another language is also structurally safe, having no English phrase to leak. His subtitle is *texte primitif rétabli*, so every file's `standing:` says he is a reading and never a witness. 63 of 64 Koua numerals decode and agree with their position; hexagrams 49, 59 and 62 lost their `Texte II.` heading outright and were recovered by ordinal run, marked `recovered_by:`.
- **McClatchie 1876 vendored — `sources/mcclatchie-1876/`, 71 files.** The first English I Ching. **Shalom found it on HathiTrust after a sweep here had wrongly concluded no digitisation was reachable**, and made the call to admit the 1973 Ch'eng Wen facsimile: the work is public domain by age, a photographic facsimile creates no new copyright, and this file already rests on that reasoning for the parent project's Song-edition photo-reproduction.
- **The PDF had no text layer at all** — 498 JBIG2 page images, 23 JPEG2000 plates, not one content stream containing a word of the book. New [`scripts/ocr-pdf.swift`](scripts/ocr-pdf.swift) rasterises each page and runs Apple's Vision engine locally: no install, no network, and **no dependency added to the monorepo**, which matters here because a root `pnpm add` regenerates the shared lockfile and has silently broken sibling apps' builds before.
- **The book held more than the sixty-four.** McClatchie also translated the 繫辭傳, the 說卦傳 and the 序卦傳, now vendored as three separate files — **the only English this project holds for texts it otherwise has only in Chinese**, which matters most for 說卦, since the eight `trigrams/*.md` answer to it. Plus his Appendix, and four plates in `figures/` including both the 先天 Fu Xi and 後天 King Wen arrangements.
- **His Appendix turned out to be the reason the book matters.** The overlay audit holds that missionary translators "translated with the only religious vocabulary they had." McClatchie **argues for it**: he sets the Yih King beside Θεός, Deus and Plato's world-soul and concludes 神 *"signifies… God, Gods"* and *"never means 'Spirit' in any Chinese book whatever."* And his Book IV renders 帝 as "The (Supreme) Emperor" and, four pages later, as "God" — **two of the five renderings the vendored glossary forbids, in one text.** That worked example is now in `method.md` § 4.
- **Sections are located by page order, not by their printed numbers**, because in this scan the numbers are the most damaged thing on the page (7 prints as `E.`, 46 as `1G.`, 64 as `GI.`). 57 of 64 numbers agree with the order and the disagreements are named; three sections that lost their heading entirely were found by their paragraph numbering restarting at 1. The parts of a section are found by McClatchie's own labels — "First-Nine", "Wăn Wang says" — rather than by numbers, because words survive a bad scan and numerals do not.
- **The Chinese half is not transcribed, and that is a rule rather than a shortfall.** The 1876 edition is bilingual, the Chinese is vertical columnar type that Vision cannot read, and a transcription produced by a language model from those page images would be indistinguishable from that model's memory of the Yijing while wearing an 1876 printing's authority. `chinese-pages.yaml` maps every scan page to its hexagram so a page can be opened and looked at. **One check was made by eye:** scan page 131 is hexagram 19 臨, and it agrees with `sources/zhouyi/19.md` character for character including the 无 forms — an 1876 Shanghai printing confirming a 21st-century wiki transcription.
- **`principles/` added — 9 entries, 8 active and 1 provisional.** The form is the Tao Te Ching project's, copied deliberately: `trigger:`-first frontmatter, two-independent-cases before `active`, and a generated index. **Its first rule is not to restate the parent's twenty-seven**, which apply here in full and are linked from `method.md` § 6 instead. New [`scripts/build-iching-principles.ts`](scripts/build-iching-principles.ts) (`pnpm xenso:principles`) regenerates `INDEX.md` and `principles.yaml`, enforces the evidence threshold, and **verifies every `evidence:` anchor resolves to a real heading** — it caught two dead anchors on its first run.
- **The entries are mostly about evidence rather than drafting, and that is diagnostic.** The parent's principles are about getting from a character to an English word, because its text arrived long ago and is not in doubt. Here five sources were vendored before a single word was rendered and every one arrived damaged differently. `principles/README.md` says so, and says that when the balance in `applies:` does not shift toward `drafting`, that is a sign this project is still building instruments instead of translating.
- **The 21 MB PDF moved to `sources/.cache/`** (gitignored) on Shalom's call. Everything else under `sources/` is text; the derived text and the four plates are what the corpus is for.

## 2026-09-10 — The evidence layer, and the reversal that made it possible

This directory held sixty-four hexagram files with `render: null` and no text to render. It also held an argument against vendoring the one English translation available — a rule invented locally, stricter than the parent project's, which had never been examined.

- **The stance on Legge reversed, and both arguments are on the record.** The old "Why not Legge" section was **stricter than the parent project's own `process/method.md` § 3 without saying so** — that file settles the question in terms (*"consult sources for meaning, never for phrasing"*) and names Legge among the pre-1931 translations in scope. And the two books are not alike: the Tao Te Ching triangulates across eight public-domain English translations, while **every public-domain English I Ching is missionary work.** Excluding Legge bought no purity, only working blind. → [README](README.md#legge-1882--a-reference-read-with-the-overlay-in-view)
- **The Chinese base text vendored — `sources/zhouyi/`, 64 of 64.** Judgment, six line texts, and the per-hexagram Wings, from Chinese Wikisource mainspace, each file naming its own revision.
- **The import verifies itself against something outside our own data, and this is the point of it.** Each page prints its own trigram decomposition (兌下坎上), and the classical line labels independently encode each line's polarity — 九 solid, 六 broken — so 初九 九二 六三 六四 九五 上六 spells `110010` and nothing else. **64 of 64 decompositions and all 384 line values now check against a source that has no idea what our table says.** A transposed row cannot survive it.
- **The five standalone Wings vendored — `sources/wings/`.** 繫辭上下, 說卦, 序卦, 雜卦. The other five are distributed per hexagram and live with them, so all ten are present.
- **Legge 1882 vendored at two grades, never blurred.** 31 hexagrams from the English Wikisource mainspace, human-proofread against the 1882 Clarendon scan; the rest extracted from the OCR of that same scan, with the extractor **scored at 99.3% word agreement against the proofread stretch before it was trusted with the rest**.
- **Hexagram 32 was demoted, and it is the reason the grade is now machine-checked.** Its Wikisource page looks finished and is not — a broken transclusion returning a fragment plus *hexagram 31's* footnote. It would have shipped as the best-graded file in the set. The importer now requires every proofread page to yield its full paragraph count.
- **The Tao Te Ching locks vendored and measured — `sources/locks/`.** 47 locked terms, of which **36 occur in the Zhouyi**: 天 122 times and locked away from "Heaven", 王 45 times and locked away from "king" — a word Legge uses on nearly every one of them.
- **[`method.md`](method.md) and [`sources/PROVENANCE.md`](sources/PROVENANCE.md) written.** The admission rules are inherited from the parent almost verbatim, with the one departure stated as a departure.
- **The formulaic measurement that set the order of work.** The judgments and line texts are **4,163 characters drawn from 794 distinct graphs**, and six verdict graphs account for 386 of them — 9.3% of the text. 无咎 appears 92 times. So the order of drafting is set by frequency, not by position: the eight trigrams, then the verdict vocabulary as one decision, then 君子/小人, then the sixty-four names.

## 2026-08-19 — The substrate seeded

Sixty-four hexagrams and eight trigrams, as a keyed lookup table rather than corpus prose — the data shape the Xensō canon asked for, since the I Ching is consulted by a cast rather than by similarity and the chunk-and-embed pipeline serves it badly.

- **`hexagrams/01.md … 64.md` and `trigrams/01-qian.md … 08-kun.md`** seeded with the settled facts — King Wen number, character, pinyin, the six-line figure, the trigram decomposition, the Shuogua image in Chinese — and `render: null` for every English word, because every English word is a decision.
- **`pnpm xenso:seed-iching`, `xenso:build-iching`, `xenso:check-iching`.** The markdown frontmatter is the source of truth; `generated/iching-data.ts` is generated into the app rather than read from disk, because the cast happens on the client.
- **The table is self-checking.** The King Wen pair invariant — consecutive pairs are each other's inversions, except the eight self-inverse figures which pair by complement — plus a bijection check, trigram agreement, the non-uniform coin odds, and **the founding cast**: the six throws logged on 2024-02-23 asking *"What will help bring Xensō into the world?"* must come out at hexagram 60 moving at line one, becoming 29 — with an assertion that reading them top-down would give 59 instead, because lines read bottom to top and getting that backwards produces a plausible wrong answer with no error to notice.
- **The interface shows `節 · hexagram 60` rather than inventing a name to fill the gap**, because an invented name would be exactly the borrowed metaphor Xensō's design forbids, and would arrive wearing authority.
