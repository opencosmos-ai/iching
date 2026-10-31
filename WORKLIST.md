# WORKLIST — what this translation still owes

*The single forward-looking file for this repository: **only work that is still owed.** When
a row closes it moves, word for word, to [`WORKLIST-CLOSED.md`](WORKLIST-CLOSED.md), and so
does any text here that described it — the reasoning already lives somewhere permanent, and
keeping it here is how a debt list goes stale. `npm run check` fails while a closed row stays.*

**Where things live.** The **ruling and its argument** go in [`glossary/`](glossary/README.md).
The **rendering** goes in `hexagrams/NN.md` / `trigrams/*.md` as `render:`. **Evidence** is
[`sources/`](sources/PROVENANCE.md), vendored and never hand-edited. **What is owed** is here.
**What happened** is [`CHANGELOG.md`](CHANGELOG.md). **Rules learned** are
[`principles/`](principles/INDEX.md). **Research that is not yet a ruling** is a dated brief —
so far two, [`tao-te-ching-relation.md`](tao-te-ching-relation.md) and [`hexagram-names.md`](hexagram-names.md). Nothing belongs in two of those.

**Each row carries its own detail.** A row whose detail will not fit in the table gets one
section below it, headed by the row's id. Nothing else lives below the table.

---

## ▶ Start here

*The pointer for whoever picks this up cold. Rewrite it when the round changes; never append to it.*

**The order of work is [`method.md`](method.md) §7**, set by frequency rather than by position.
What it leaves, in order:

1. **貞 · 亨 · 孚** (*zhēn · hēng · fú*) — A6, the divinatory/ethical fork, with 元 and 利 (A14)
   beside them. The six verdict graphs before them are locked (A4, 2026-10-20).
2. **君子 and 小人** (*jūn zǐ / xiǎo rén*) — A5.
3. **The 64 names** — A7, only after 1 and 2, with the whole set in view.
4. **The judgments, then the line texts** — A8.

**Waiting on Shalom:** the proposed names (A7); whether the lock on 無 binds 无 (A11); what the 64 readings surfaced (A12); and
the glosses PR #14 flagged (A13).

**The next thing should be a rendering, not an instrument.** [`principles/README.md`](principles/README.md)
names the share of `drafting` principles as the thing to watch: while it does not grow, this
project is building instruments rather than translating.

---

## The list

**⬜ open · 🔶 part done · ⏸ deferred by Shalom · 🔴 blocked on Shalom**

| # | | Item | Where | Unit |
|---|---|---|---|---|
| | | **A · Drafting — the actual work** | | |
| A5 | ⬜ | **君子 (20×) and 小人 (10×)** — not in the parent glossary, so written from scratch. Register *and* gender; `universalize-and-name-the-seam` applies. **Rule it here and promote it to the parent's lock table** — 君子 is 20× here against 3× in the Laozi, and 君子終日 is the one four-character string the two books share | `glossary/` | 2 |
| A6 | ⬜ | **貞 (111×) · 亨 (48×) · 孚 (42×)** — the divinatory/ethical fork, the deepest open question in the project. Read all three translators before touching any of them. The readings' evidence is under A12 | `glossary/` | 3 |
| A7 | 🔶 | **The 64 hexagram names** — every one has a proposed English and its candidates in [`hexagram-names.md`](hexagram-names.md), awaiting Shalom's review; 5 wait on A4/A6/A11 and on what 有 is here. **The nine the signature strains** — 11, 12, 14, 19, 34, 51, 58, 60, 61 — want a second look before approval | `hexagrams/` | 64 |
| A8 | ⬜ | **The judgments and line texts** — 64 × 8. **Five owe *wood* in their own `image:` field:** the 大象傳 (*dà xiàng zhuàn* — the Great Image) of 28 大過, 46 升, 48 井, 50 鼎 and 53 漸 names 木 (*mù* — wood), where the trigram 巽 (*xùn*) renders *wind*. That is a different sentence from the trigram's name, and 鼎 is a cauldron on a **wood** fire | `hexagrams/` | 512 |
| A11 | 🔴 | **Does the lock on 無 bind 无?** — the Zhouyi writes the negative 无 (158× in the core, 138× in the Wings) where the parent's lock is written on 無 (2× and 5×). Same word, two graphs; until it is ruled the lock reaches almost nothing here. Decides 25 无妄. **无咎 does not wait on it** (A4, 2026-10-20): the core's only two 無 are 13.1 無咎 and 13.6 無悔, both verdict formulae and probably the transcription's (B10), and the parent's own 無 flexes to a plain *no* (ch 8 無尤, ch 10 無疵) | `glossary/` | 1 |
| A12 | 🔴 | **What the 64 readings surfaced** — writing *The heart of it* for every hexagram turned up evidence for A4/A6, name collisions with the Tao Te Ching's vocabulary, and terms with no English yet. Grouped below, for Shalom | [below](#a12--what-the-64-readings-surfaced) | ~25 |
| A13 | 🔴 | **The glosses PR #14 flagged as least certain** — about 3,200 Chinese passages in the readings were glossed for the first time on 2026-09-28, and the editors listed the ones they were least sure of (rare characters, some proper names, places where a gloss chose between readings) in [PR #14](https://github.com/opencosmos-ai/iching/pull/14). Its *Shalom reviews the flagged glosses* box was left unticked | `hexagrams/` | — |
| A14 | ⬜ | **元 (27×) and 利 (119×)**: the rest of [`method.md`](method.md) §7's stage 2, which A4 and A6 between them do not cover. 元吉 alone is 14 lines, and A4's entries leave it open. The parent's 無 & 有 entry already `covers:` 利 as *advantage* | `glossary/` | 2 |
| A15 | ⬜ | **尤 needs a word of its own** — six times in the 小象傳 (終无尤也 at 22, 23, 39, 50, 56; 中无尤也 at 26). Not *blame*, which A4 gave 咎, and not *fault*, which 過 wants. The readings gloss it "no fault" three times (26 twice, 39), and those change with the ruling. *Reproach* is unclaimed in both books; the Tao Te Ching's 尤 *blame* binds only there (found 2026-10-20, A4) | `glossary/` · `hexagrams/` | 1 |
| | | **B · Evidence — what the sources still owe** | | |
| B1 | ⬜ | **1,075 OCR disputes still unsettled** in McClatchie — both engines disagree and neither the book's vocabulary nor the scan pass could resolve it. The live count is the file's `summary:` | `sources/mcclatchie-1876/disputed.yaml` | 1075 |
| B3 | ⏸ | **The Chinese half of McClatchie is not transcribed** — a rule, not a shortfall. Route named: `brew install tesseract-lang`, `chi_tra_vert` | `sources/` | 1 |
| B4 | ⬜ | **Legge's footnotes not vendored** | `sources/legge-1882/` | 1 |
| B5 | ⬜ | **`prescrves-the «`-class errors** — multi-token blocks straddling a line break are left alone by design; a proofreading pass would need the scan | `disputed.yaml` | — |
| B9 | ⬜ | **Simplified graphs in the vendored Zhouyi** — 云 濟→济 几 谷 丑 愿 荐 涂, some 后 for 後, found by grading the 周易注 against it. `sources/` is never hand-edited: report them from the importer, and fix upstream on Wikisource where the scan supports it | `sources/zhouyi/` | ~15 |
| B10 | ⬜ | **Hexagram 13 writes 無 where the rest write 无.** 13.1 無咎 and 13.6 無悔 are the core text's only two 無, and they are what A11 counts as "2× in the core". 王弼's 周易注 writes 无咎 and 无悔 at both lines, and 无咎 in all 233 places, never 無咎. So the variant is the transcription's, not the text's. Report it from the importer, as B9 does (found 2026-10-20, A4) | `sources/zhouyi/13.md` | 2 |
| | | **C · Tooling** | | |
| C12 | ⬜ | **A verdict entry cannot be cited yet.** `npm run check` compares a file's `render:` with the `render:` of every entry in its `glossary_refs:`. That is right for a name and wrong for a verdict word. Once a hexagram has a name, citing [`吉-ji`](glossary/吉-ji.md) fails as a disagreement, so the six A4 entries have no citations. The check has to tell the entry that argues a name from the entries a line text uses before A8 begins | `scripts/check-iching.ts` | 1 |

---

## A12 · What the 64 readings surfaced

*Gathered 2026-09-25 from the reports behind each hexagram's `## The heart of it`. Each item names
where the evidence is; the reasoning is in that hexagram's section.*

**Evidence for A6 (亨, 孚, 貞) — the richest yield.**
- **亨 sits on a different axis from 泰/否.** 泰 has it only in its judgment; 否 only in lines 1–2 (大人否。亨, "the great person is blocked; it gets through"). So 11's name must not be a synonym of 亨, and 12 does not rule out *gets through* (11, 12).
- **亨 must be read 享, "offering", at 14.3, 46.4 and 47.2** (王弼's text writes 享 at 47.2); at 17.6 readers split between offering and 王弼's 通. 說文 羞 = 進獻也 suggests a sequence of offerings in 12.1–3.
- **孚:** 說文 itself holds the fork — 卵孚也 ("brooding"), then 一曰信也 ("some say: 信") — which makes the collision with the 信 lock explicit (61). 49's 彖 glosses 孚 with 信 (革而信也). At 44.1 *confidence* does not fit (王弼: 務躁).
- **貞:** 說文 records that the 籒文 script wrote 貞 with 鼎 (50). The older reading, "the inquiry", is live at 16.5 (貞疾), 17.4, 18.2 and 23.1 (蔑貞).

**Evidence for A4 (the verdict words).** 28.6 reads 凶，无咎 ("ominous, no blame") — the clearest case that 凶 is an outcome, not a judgement. Whole hexagrams carry no 凶: 18, 20 (no 吉 either; its verdicts are 20.1's 吝 and three 无咎 — *corrected 2026-10-20, it read "no verdict word at all"*), 25, 45 (every line 无咎), 59, 63. The full count is 26 hexagrams without 凶; see [`凶-xiong.md`](glossary/凶-xiong.md).

**Names that collide with the Tao Te Ching's words** (recorded in [`hexagram-names.md`](hexagram-names.md)).
- 4 *Unknowing* ≈ the Laozi's 無知 (chs 3, 10). 14 *Great Possession* ≈ the Laozi's verbal 有 *possessing* — the evidence now favours *Great Having*. 20 *Watching*: the Laozi renders 觀 *observe*. 34 *Great Vigour*: *vigour* is 健's. 51 *Shock*: 驚 is *shock* (ch 13) and stands in 51's own judgment. 52 *Stilling*: *stillness* is 靜's (22×).

**Terms that need an English, or collide.**
- **命 wants a spoken-charge flexion:** at 6.4, 7.2, 7.6, 11.6, 56.5 and 57 it reads as an order or charge spoken over someone, and *the allotted course* strains.
- **侯, 君, 大君 collide with 公 = *lord*** (3, 7.6, 10.3, 19, 35) — each needs its own word.
- **晦** needs one (*dark* is 玄's; *obscurity* for now, 36). **文**: *pattern* (22) against the Laozi's *cultural form* (ch 19). **戎器**: *tools of war* (the Laozi's *tools*) or *implements* (45). **妾** *concubine* (50) against **娣** *junior wife* (54) — decide together.
- **天** at 38.3 is the crown of the head (說文 顛也), a punishment — the *sky* lock was not made for it. **王母** (35.2) is *grandmother* in the kinship terms of the time. **天下** in 44's 大象 (天下有風) is "under the sky", against the lock's *the world*. **善** as a verb (53 善俗, *betters*) and as a category (14, 42, *good*).
- **道** in the Wings forces "the Tao of husband and wife" (序卦, 32) — awkward.

**For the Tao Te Ching side.** Its ch 9 renders 天之道 "the way of nature", although 道 is locked to *the Tao* (reported by 19); its ch 54 renders 家 *family* while 37 proposes *household*.

**Seams to check before building on them:** 37 (the household's roles), 54 (the 娣 system, named plainly), 32.5 (a verdict split by gender role).
