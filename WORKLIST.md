# WORKLIST — what this translation still owes

*The single forward-looking file for this repository. Everything here has a status that
needs keeping current. When an item closes it leaves the list and becomes one line in the
ledger at the foot — the reasoning already lives somewhere permanent, and repeating it here
is how a debt list goes stale.*

**Where things live.** The **ruling and its argument** go in [`glossary/`](glossary/README.md).
The **rendering** goes in `hexagrams/NN.md` / `trigrams/*.md` as `render:`. **Evidence** is
[`sources/`](sources/PROVENANCE.md), vendored and never hand-edited. **What is owed** is here.
**What happened** is [`CHANGELOG.md`](CHANGELOG.md). **Rules learned** are
[`principles/`](principles/INDEX.md). **Research that is not yet a ruling** is a dated brief —
so far two, [`tao-te-ching-relation.md`](tao-te-ching-relation.md) and [`hexagram-names.md`](hexagram-names.md). Nothing belongs in two of those.

**Last updated:** 2026-09-24

---

## Where the project actually stands

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

## The list

**⬜ open · 🔶 part done · ✅ done · ⏸ deferred by Shalom · 🔴 blocked on Shalom**

| # | | Item | Where | Unit |
|---|---|---|---|---|
| | | **A · Drafting — the actual work** | | |
| A1 | ✅ | ~~**The eight trigrams**~~ — all eight rendered, 2026-09-12 | `trigrams/` | 8 |
| A2 | ✅ | ~~**巽 is two images**~~ — **`wind`**; the five 木 hexagrams carry wood in `image:` | `trigrams/05-xun.md` | 1 |
| A3 | ✅ | ~~**澤 — what kind of water**~~ — **`lake`**, Shalom 2026-09-12 | `trigrams/02-dui.md` | 1 |
| A4 | ⬜ | **The verdict vocabulary, decided as one set** — 吉 凶 咎 悔 吝 厲 无咎. 386 occurrences, 9.3% of the text; decide them individually and they will overlap | `glossary/` | ~7 |
| A5 | ⬜ | **君子 (20×) and 小人 (10×)** — not in the parent glossary, so written from scratch. Register *and* gender; `universalize-and-name-the-seam` applies. **Rule it here and promote it to the parent's lock table** — 君子 is 20× here against 3× in the Laozi, and 君子終日 is the one four-character string the two books share | `glossary/` | 2 |
| A6 | ⬜ | **貞 (111×) · 亨 (48×) · 孚 (42×)** — the divinatory/ethical fork, the deepest open question in the project. Read all three translators before touching any of them | `glossary/` | 3 |
| A7 | 🔶 | **The 64 hexagram names** — every one has a proposed English and its candidates in [`hexagram-names.md`](hexagram-names.md), awaiting Shalom's review; 5 wait on A4/A6/A11 and on what 有 is here. The trigram/hexagram split is ruled | `hexagrams/` | 64 |
| A8 | ⬜ | **The judgments and line texts** — 64 × 8 | `hexagrams/` | 512 |
| A9 | ✅ | ~~**Hexagram-name concordance against the locks**~~ — closed 2026-09-24: [`glossary/NAMES.md`](glossary/NAMES.md), `npm run names`. 6 of 64 names carry a lock; 53 recur as a word in their own lines | `glossary/` | 1 |
| A11 | 🔴 | **Does the lock on 無 bind 无?** — the Zhouyi writes the negative 无 (158× in the core, 138× in the Wings) where the parent's lock is written on 無 (2× and 5×). Same word, two graphs; until it is ruled the lock reaches almost nothing here. Decides 25 无妄 and 无咎 (A4) together | `glossary/` | 1 |
| | | **B · Evidence — what the sources still owe** | | |
| B1 | ⬜ | **1,075 OCR disputes still unsettled** in McClatchie — both engines disagree and neither the book's vocabulary nor the scan pass could resolve it. The live count is the file's `summary:` | `sources/mcclatchie-1876/disputed.yaml` | 1075 |
| B2 | ✅ | ~~**說文解字 not vendored**~~ — closed 2026-09-24: [`sources/shuowen/entries.md`](sources/shuowen/entries.md), 1,228 of 1,374 characters, by the parent's parser ported and checked against it. 146 unmatched, incl. 雷 (filed as 靁), 无, 亨 | `sources/` | 1 |
| B3 | ⏸ | **The Chinese half of McClatchie is not transcribed** — a rule, not a shortfall. Route named: `brew install tesseract-lang`, `chi_tra_vert` | `sources/` | 1 |
| B4 | ⬜ | **Legge's footnotes not vendored** | `sources/legge-1882/` | 1 |
| B6 | ✅ | ~~**王弼's 周易略例 not vendored**~~ — closed 2026-09-24: [`sources/wangbi/lueli.md`](sources/wangbi/lueli.md), the Song edition, OCR graded 93.4–99.7% per chapter. The brief's § 8 now quotes it — and the slogan 得意忘象 turns out not to be in it; he writes 得意而忘象 | `sources/` | 1 |
| B7 | ✅ | ~~**The two-corpus measurements had no script**~~ — closed 2026-09-24: `npm run measure` recomputes all 87 figures in the brief; its first run corrected 15, and 時 turned out to be in the Laozi (ch 8) | `scripts/` | 1 |
| B8 | ✅ | ~~**王弼's 周易注 not vendored**~~ — closed 2026-09-24: [`sources/wangbi/zhu/`](sources/wangbi/zhu/), the sixty-four with Wang Bi's notes and the Wings with 韓康伯's; text graded 97.1% mean against `zhouyi/`, notes 92.1% against the typed 周易正義 | `sources/` | 1 |
| B9 | ⬜ | **Simplified graphs in the vendored Zhouyi** — 云 濟→济 几 谷 丑 愿 荐 涂, some 后 for 後, found by grading the 周易注 against it. `sources/` is never hand-edited: report them from the importer, and fix upstream on Wikisource where the scan supports it | `sources/zhouyi/` | ~15 |
| B5 | ⬜ | **`prescrves-the «`-class errors** — multi-token blocks straddling a line break are left alone by design; a proofreading pass would need the scan | `disputed.yaml` | — |
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

---

## Closed — the ledger

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
