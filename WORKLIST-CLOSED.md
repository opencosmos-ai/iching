# WORKLIST-CLOSED — what this translation no longer owes

*The closed half of [`WORKLIST.md`](WORKLIST.md). When a row closes, it moves here word for word, with whatever text described it, so that a row id cited anywhere in the repository (a hexagram's `A4`, a glossary entry's `§ A1`, the CHANGELOG's `A10`) still resolves with one search. **Nothing here is owed.** A row that reopens moves back to `WORKLIST.md`.*

*Where the reasoning lives is unchanged: the ruling and its argument in [`glossary/`](glossary/README.md), the rendering in `hexagrams/` and `trigrams/`, what happened in [`CHANGELOG.md`](CHANGELOG.md). Each row below says which.*

*Split out of `WORKLIST.md` on 2026-10-20. Text was moved word for word; the few lines written that day say so, with the date.*

---

## Closed rows

| # | | Item | Where | Unit |
|---|---|---|---|---|
| | | **A · Drafting — the actual work** | | |
| A1 | ✅ | ~~**The eight trigrams**~~ — all eight rendered, 2026-09-12 | `trigrams/` | 8 |
| A2 | ✅ | ~~**巽 is two images**~~ — **`wind`**; the five 木 hexagrams carry wood in `image:` | `trigrams/05-xun.md` | 1 |
| A3 | ✅ | ~~**澤 — what kind of water**~~ — **`lake`**, Shalom 2026-09-12 | `trigrams/02-dui.md` | 1 |
| A4 | ✅ | ~~**The verdict vocabulary, decided as one set**~~ — closed 2026-10-20, Shalom: *auspicious · ominous · blame · regret · constriction · peril*, all six locked in [`glossary/`](glossary/INDEX.md). 咎 is *blame* here while the Tao Te Ching keeps *fault*; 吝 is *constriction*, replacing *stinting*, with the readings retrofitted. The set is in [§ A4](#a4--the-verdict-vocabulary--done) | `glossary/` | 6 |
| A9 | ✅ | ~~**Hexagram-name concordance against the locks**~~ — closed 2026-09-24: [`glossary/NAMES.md`](glossary/NAMES.md), `npm run names`. 6 of 64 names carry a lock; 53 recur as a word in their own lines | `glossary/` | 1 |
| | | **B · Evidence — what the sources still owe** | | |
| B2 | ✅ | ~~**說文解字 not vendored**~~ — closed 2026-09-24: [`sources/shuowen/entries.md`](sources/shuowen/entries.md), 1,228 of 1,374 characters, by the parent's parser ported and checked against it. 146 unmatched, incl. 雷 (filed as 靁), 无, 亨 | `sources/` | 1 |
| B6 | ✅ | ~~**王弼's 周易略例 not vendored**~~ — closed 2026-09-24: [`sources/wangbi/lueli.md`](sources/wangbi/lueli.md), the Song edition, OCR graded 93.4–99.7% per chapter. The brief's § 8 now quotes it — and the slogan 得意忘象 turns out not to be in it; he writes 得意而忘象 | `sources/` | 1 |
| B7 | ✅ | ~~**The two-corpus measurements had no script**~~ — closed 2026-09-24: `npm run measure` recomputes all 87 figures in the brief; its first run corrected 15, and 時 turned out to be in the Laozi (ch 8) | `scripts/` | 1 |
| B8 | ✅ | ~~**王弼's 周易注 not vendored**~~ — closed 2026-09-24: [`sources/wangbi/zhu/`](sources/wangbi/zhu/), the sixty-four with Wang Bi's notes and the Wings with 韓康伯's; text graded 97.1% mean against `zhouyi/`, notes 92.1% against the typed 周易正義 | `sources/` | 1 |
| | | **C · Tooling** | | |
| C1 | ✅ | ~~**No glossary index generator**~~ — closed 2026-09-24: `npm run glossary` writes `glossary/INDEX.md`, and CI fails if it is stale | `scripts/` | 1 |
| C2 | ✅ | ~~**Nothing checked that `glossary_refs:` resolve**~~ — closed 2026-09-24: `npm run check` fails on a dangling ref, and on a `render:` its entry does not rule | `scripts/` | 1 |
| C3 | ✅ | ~~**No check that a rendering respects the locks**~~ — closed 2026-09-24: `npm run check` tests every English field against its own `forbidden:`, its entry's, and every lock, on the parent's `check_locks.py` rules. Only the eight trigrams have English yet | `scripts/` | 1 |
| C4 | ✅ | ~~Two OCR witnesses, corpus and scan adjudication~~ — closed 2026-09-12 | — | — |
| C5 | ✅ | ~~`mcPageBody` truncating pages at the first long line~~ — closed 2026-09-12 | — | — |
| C6 | ✅ | ~~**The principles were argued well and reached by nobody**~~ — closed 2026-09-24: all thirteen on the parent's new shape, every scope loaded where its work begins, and `npm run principles -- --check` refuses an entry that is not shaped to run. `iching-principle-entry` skill added | `principles/` · `scripts/` | 13 |
| C7 | ✅ | ~~**`check-iching` did not come with the extraction**~~ — closed 2026-09-24: `npm run check` runs the table half, reading the frontmatter, and fails if `generated/` has drifted from it. The engine half stays in opencosmos with the engine | `scripts/` | 1 |
| C8 | ✅ | ~~**`pnpm xenso:*` survives the extraction**~~ — closed 2026-09-24: the importer was re-run offline and its output is byte-identical but for three McClatchie headers, now its output again. The locks are C10 | repo-wide | 20 |
| C9 | ✅ | ~~**Two measurements of the McClatchie OCR, not reconciled**~~ — closed 2026-09-24: the full-body 19.8 / 10.5 / 3.9% are current; `PROVENANCE.md` says so | `scripts/` · `sources/` | 1 |
| C10 | ✅ | ~~**The vendored locks were three terms behind the parent**~~ — closed 2026-09-24, Shalom: re-vendored, 50 locked and 39 binding; 治 *govern*, 亂 *disorder*, 身 *body* are new. The table shows the parent's flexions, which moved out of `render:` | `sources/locks/` | 1 |
| C11 | ✅ | ~~**The importer rewrote `transcribed:` to today on every run**~~ — closed 2026-09-24: a file whose text is unchanged keeps its stamp, so a no-op re-run leaves the tree clean | `scripts/` | 1 |

---

## Closed parts of rows still open

*When a row stays open but part of it is finished, the finished part comes here, word for word, and the row in `WORKLIST.md` keeps only what is owed. The open row is the current one; this is what it no longer says. First filled at the split, 2026-10-20.*

- **A7** — The trigram/hexagram split is ruled
- **A8, A13** were not rows before the split (2026-10-20). A8's five *wood* images were the *One thing still owed here* paragraph inside *A1 · The eight trigrams — done*, below, "queued as part of A8" and named nowhere in A8. A13 was an unticked box in [PR #14](https://github.com/opencosmos-ai/iching/pull/14)'s body. Both were owed and tracked by no row.

---

## Where the project stood on 2026-09-24

**Eight sources vendored, fifteen principles written, the eight trigrams drafted, and a proposed
English for all 64 names.** The eight trigrams carry a `render:` and eight glossary entries argue
them. The 64 hexagrams are still `render: null`, all `status: draft` — their candidates are in
[`hexagram-names.md`](hexagram-names.md), awaiting Shalom's review. The lens is declared
([`README.md`](README.md#the-lens)). The parent Tao Te Ching project has 50 glossary entries
and 81 drafted chapters.

The principles split **12 sources · 9 drafting · 6 process · 6 tooling · 3 glossary**, and
[`principles/README.md`](principles/README.md) already names that ratio as the thing to
watch: while it does not shift toward `drafting`, this project is building instruments
rather than translating. It has begun to shift — the three newest entries are all about
getting from a character to an English word — and the next thing should be the next
rendering, not another instrument.

**The order of work is set by [`method.md`](method.md) §7**, and it is set by frequency,
not by position: the eight trigrams, then the verdict vocabulary as one decision, then
君子/小人, then the 64 names, then the judgments and line texts.

---

## A1 · The eight trigrams — done

**sky · earth · thunder · wind · water · fire · mountain · lake**

Decided as one set, not as eight, which is now [[a-closed-set-is-one-decision]]. The common
reasoning: 說卦 gives every trigram both an **action** (ch 7: 乾，健也) and an **image** (ch 11:
乾為天), and the 大象傳 bound into every hexagram runs on the images — across the 64 they name
天 18 times, 地 17, 雷 15, 山 15, 澤 15, 水 11, 風 10, 火 10, against 健 1, 順 2, 入 2, 麗 1, and
動 陷 止 說 not at all.

Constraints that came from the set rather than from any member: 坎 takes *water*, so 兌 cannot;
乾 is held to *sky* by the lock on 天 across 122 occurrences; and 巽 takes *wind* because *wood*
breaks the register the other seven hold. 說卦 confirms it — 天地定位，山澤通氣，**雷風**相薄，
水火不相射 (ch 3) names the eight as four pairs, and 木 appears in none of its systematising
passages.

**One thing still owed here:** the five hexagrams whose 大象傳 names 木 — **28 大過, 46 升,
48 井, 50 鼎, 53 漸** — must render *wood* in their own `image:` field. That is a different
sentence from the trigram's name, and 鼎 is a cauldron on a **wood** fire. Queued as part of A8.

## A4 · The verdict vocabulary — done

*Closed 2026-10-20: Shalom accepted the six, and all six are `status: locked`. Moved from `WORKLIST.md` word for word, except the last paragraph and the pointer to A15, which were written at the close.*

*Drafted 2026-10-20, for Shalom. Each word's argument is in its entry. This section lays the six out
together, as [`a-closed-set-is-one-decision`](principles/a-closed-set-is-one-decision.md) requires,
and says what is still his to rule. Counts are the core text's, measured from `sources/`.*

**The Wings arrange the set themselves, and 厲 is not in their arrangement.** 繫辭上 ch 2–3 gives
three tiers. 說卦 ch 3 did the same for the trigrams.

| 繫辭上 ch 2–3 | Graph | Core | English | Entry |
|---|---|---|---|---|
| 失得之象, "the images of losing and getting" | 吉 · 凶 | 147 · 58 | *auspicious* · *ominous* | [`吉-ji`](glossary/吉-ji.md) · [`凶-xiong`](glossary/凶-xiong.md) |
| 小疵, "small blemishes"; 憂虞, "worry and apprehension" | 悔 · 吝 | 34 · 20 | *regret* · *constriction* | [`悔-hui`](glossary/悔-hui.md) · [`吝-lin`](glossary/吝-lin.md) |
| 善補過, "being good at mending a fault" | 咎, mostly 无咎 | 100 | *blame*, *no blame* | [`咎-jiu`](glossary/咎-jiu.md) |
| absent from 繫辭 — the situation the verdict follows | 厲 | 27 | *peril* | [`厲-li`](glossary/厲-li.md) |

**The draft kept the working glosses the readings already use.** Laying them out together found
four things the working glosses did not show:

1. **厲 is a condition, not a verdict.** It stands with 吉 in 6 lines and with 咎 in 9, and it comes
   before the verdict in 12 of the 15 lines that have both: 厲，无咎, "peril; no blame." So
   [`method.md`](method.md) § 4's "graded scale" holds for 悔 and 吝 and not for 厲.
2. **The readings invert the Tao Te Ching on 咎 and 尤.** Shalom has ruled on it, below.
3. **A4 does not wait on A6.** 貞 governs a verdict word directly in 56 lines: 貞吉 34, 貞凶 10, 貞厲 8,
   貞吝 4. Every one reads under either side of A6's fork, "holding firm: auspicious" or "the
   inquiry: auspicious". The six can be ruled first.
4. **Nor on A11.** See the A11 row and [`咎-jiu`](glossary/咎-jiu.md#the-seam).

**咎 is *blame* (Shalom, 2026-10-20).** The Tao Te Ching keeps 咎 *fault* and 尤 *blame*, because
it is a different context. So the two books render 咎 differently on purpose, and nothing locks
across them. **The ruling leaves one thing inside this book:** 尤, six times in the 小象傳, needs a
word that is neither *blame* nor *fault*. 26's reading glosses 中无尤 "no fault", and that has to
change. *Reproach* is free. This is A15, open in [`WORKLIST.md`](WORKLIST.md).

**吝 is *constriction* (Shalom, 2026-10-20).** It replaces *stinting*, which carried only the
stinginess of 說卦's 吝嗇. *Constriction* answers to both of the Wings' strands: the place running
out (窮, the 小象傳 three times) and the heart narrowing (王弼's 褊狹, 不弘). *Narrowness* was set
aside because it reads like a trait. The readings were retrofitted the same day: 55 *stinting*
glosses, plus four stray glosses of 吝 in 13 and 31 (*narrowness*, *going brings regret*). See
[`吝-lin`](glossary/吝-lin.md).

**Locked, 2026-10-20.** Shalom accepted *auspicious*, *ominous*, *regret* and *peril* as drafted, and all six entries carry `status: locked`. Three rows came out of this one: A14 (元 and 利, which no row covered), A15 (尤's word) and C12 (the check cannot yet cite a verdict entry).

---

## Closed — the ledger

- **2026-10-20** · **The verdict vocabulary locked** (A4) — Shalom. 吉 *auspicious* · 凶 *ominous* · 咎 *blame* · 悔 *regret* · 吝 *constriction* · 厲 *peril*. 咎 differs from the Tao Te Ching's *fault* on purpose; 吝 replaced *stinting*, and the readings were retrofitted. → [glossary](glossary/INDEX.md)
- **2026-09-24** · **ADR 0016 accepted: the Wings are the lens, declared** (A10) — Shalom. [`README.md`](README.md#the-lens)
  states the five terms and [`method.md`](method.md) § 5 applies them; the four spectrums the trigram system rests on are
  stated in [`README.md`](README.md#the-shape-of-the-figures), carried as data on each trigram and checked by `npm run check`. → [CHANGELOG](CHANGELOG.md)
- **2026-09-24** · **The names concorded; 說文, 王弼's 略例 and his 周易注 vendored** (A9, B2, B6, B8) — `glossary/NAMES.md`;
  `sources/shuowen/`, by the parent's parser held to it; `sources/wangbi/lueli.md`, graded against a
  typed witness. Surfaced: 無/无 (A11) and, from grading the 周易注 (B8, also closed), simplified graphs in our own Zhouyi (B9). → [CHANGELOG](CHANGELOG.md)
- **2026-09-24** · **The brief's measurements have a script** (B7) — `npm run measure`; 15 of 87 hand-counted
  figures were wrong, one of them an argument: 時 is in the Laozi, once. → [CHANGELOG](CHANGELOG.md)
- **2026-09-24** · **The glossary is indexed, and the locks are checked by code** (C1, C2, C3, C10) —
  `npm run glossary`; `npm run check` now holds the `glossary_refs:` join and every lock; the locks
  re-vendored at 50, flexions shown. → [CHANGELOG](CHANGELOG.md)
- **2026-09-24** · **The vendored sources regenerate from this repository** (C8, C9, C11) — offline, byte-identical
  but for three headers; the last `xenso:` names gone; the OCR figures reconciled; a no-op re-run
  now leaves the tree clean.
  → [CHANGELOG](CHANGELOG.md)
- **2026-09-24** · **The table checks itself again** (C7) — `npm run check`: bijection, King Wen
  pairs, trigram agreement, the founding cast, and that `generated/` matches the frontmatter.
  The engine half stays in opencosmos with the engine. → [CHANGELOG](CHANGELOG.md)
- **2026-09-12** · **The eight trigrams rendered** (A1, A2) — sky · earth · thunder · wind ·
  water · fire · mountain · lake. The project's first English. → [glossary](glossary/)
- **2026-09-12** · **澤 → `lake`** (A3). 47 困 澤无水 shows 澤 is the hollow, not the water;
  lake survives 13 of 15 images and pairs with 山 as 咸 and 損 need. → [glossary](glossary/兌-dui.md)
- **2026-09-12** · McClatchie OCR: two witnesses, corpus and scan adjudication, page
  truncation fixed. 7.19% → 4.50%; 60 of 64 complete. → [CHANGELOG](CHANGELOG.md)
- **2026-09-12** · `method.md` §2 rewritten around **derivation**, after two related errors on
  one day: "Never for a word" would have forbidden *thunder* for 雷, and 澤 was ruled away from
  *lake* because the word is Wilhelm's — fusing the source-admission rule with a rule about
  renderings. No English word is unavailable because a prior translator used it, and convergence
  is evidence. → [[convergence-is-evidence]]
- **2026-09-11** · Five sources vendored; `principles/` started. → [CHANGELOG](CHANGELOG.md)
- **2026-08-19** · The substrate seeded, self-checking. → [CHANGELOG](CHANGELOG.md)
