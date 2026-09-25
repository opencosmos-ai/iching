---
id: the-image-names-the-trigram-the-lines-name-the-hexagram
title: "The image names the trigram; the lines name the hexagram"
status: provisional
since: 2026-09-24
trigger: "you are about to give a character the English it already has at another level of the figure — the trigram's image, a word ruled out for the trigram — without checking how this level's own text uses it"
applies: [drafting, glossary]
evidence:
  - "../glossary/震-zhen.md#what-is-ruled-out-and-why"
  - "../hexagram-names.md#what-is-already-ruled"
check: none
supersedes: []
---

# The image names the trigram; the lines name the hexagram

**The rule.** A trigram's English renders **its 說卦 (*shuōguà*) image** — 坎 (*kǎn*) is *water*
because 說卦 says 坎為水. A hexagram's English renders **how its own judgment and lines use its
character** — hexagram 29 坎 is *the pit*, because every one of its eight uses is a pit. Where the
two share a character, as in the eight doubled hexagrams, the two Englishes may differ, and usually
should. **A trigram's `forbidden:` list binds the trigram's image, not the character**, so it does
not follow the character into the hexagram.

**When it fires.** When a hexagram's name is also a trigram's name, or a word barred at one level
looks right at the other. Check the lines before carrying anything across.

---

## Why this holds

**The two levels are different kinds of text.** A trigram has no lines of its own. Its only
content is what the Wings say of it — an image, an action, a family role — and its English has to
**stack** inside 大象傳 (*dàxiàngzhuàn*) sentences: 風行水上, "wind moving over water". A hexagram
has a judgment and six lines, and **its name is usually a word those lines go on using** — 53 of
the 64 recur in their own text ([`../glossary/NAMES.md`](../glossary/NAMES.md)). An English that
stacks well as an image can be nonsense as a verb: 艮其背 (*gèn qí bèi*) cannot be "mountain his
back".

**王弼 (*Wáng Bì*) draws exactly this line, on the two hexagrams where it matters most.** On 坤
(*kūn*): 地也者形之名也，坤也者用地者也 — "earth is the name of the form; 坤 is what puts earth to
use." On 乾 (*qián*) he makes the same cut with 乾's action word, 健 (*jiàn*, "vigour" — 說卦 乾，健也):
天也者形之名也，健也者用形者也 — "sky is the name of the form; vigour is what puts the form to use."
The image is the form; the hexagram's character names what is done with it. The oldest complete
commentary on the book to survive treats them as two names. *(Both at 彖傳, unpunctuated in the vendored
witness — [`../sources/wangbi/zhu/01.md`](../sources/wangbi/zhu/01.md),
[`02.md`](../sources/wangbi/zhu/02.md); the punctuation here is ours.)*

**This does not break [`repeat-yourself`](https://github.com/opencosmos-ai/taoteching).** The
parent's rule is that one Chinese word gets one English. The trigram's English does not render
the graph 坎 at all — it renders the image 水 (*shuǐ*, "water") that 說卦 assigns it. Wherever 坎
itself is a word, in hexagram 29's lines and anywhere else, it is *pit* every time. **The rule
holds at the level of the word; the trigram's English sits at the level of the image.** That is
the one place this project departs from a literal reading of the parent's rule, and this entry is
where it says so.

**An exclusion carries the reason it was made.** The trigram entries bar *shock* for 震 (*zhèn*)
and *keeping still* for 艮 because each **breaks the image stacking** — 雷在天上 (*léi zài tiān
shàng*) is thunder in the sky, not a shock in the sky. That reason is about images. It has nothing
to say about hexagram 51, whose lines are about being shaken, so the barred word may be exactly
right there.

---

## Why this principle exists

**The trigrams were drafted first, as the order of work says, and their renders began to look like
answers for the eight doubled hexagrams.** The 震 entry of 2026-09-12 already saw the split coming
and deferred the shock "to the hexagram notes at 51". When all 64 names were drafted on
2026-09-24, the trigram's English failed its own hexagram's lines in all eight cases: *mountain*
for 艮其背, *water* for 入于坎窞 ("enter the hollow of the pit"), *wind* for 巽在牀下 ("巽 beneath
the couch"), *lake* for 和兌 ("harmonious 兌"). Shalom ruled the split that day.
→ [`../hexagram-names.md`](../hexagram-names.md#what-is-already-ruled)

---

## How it is implemented

| Where | What it does |
|---|---|
| **[`../method.md`](../method.md) § 1** | the table of what is decided names the two units separately and points here |
| **[`../glossary/README.md`](../glossary/README.md#what-an-entry-owes)** | item 4 scopes a `forbidden:` list to what its entry rules |
| **`glossary_refs:`** | a doubled hexagram points at **its own** entry, never the trigram's — which is what keeps the trigram's `forbidden:` out of `npm run check` for that hexagram |
| **`--applies drafting`, `--applies glossary`** | loaded before anything is rendered and before a term is ruled |

**Not enforced.** Whether a word renders the image or the use is judgement. The one mechanical
piece — a doubled hexagram's `glossary_refs:` naming the trigram entry — could be checked in
`scripts/check-iching.ts`, and is not yet.

---

## Where it does not fire

**Not on the image field.** A hexagram's `image:` renders its 大象傳, which is written in trigram
images — 洊雷 (*jiàn léi*, "thunder repeated") in 51 is *thunder*, the trigram's word, because it
is the trigram's image.

**Not on the locks.** A lock binds a character everywhere it is written, at every level. 天 is
never *Heaven* in a trigram, a hexagram or a line.

**Not as a licence to vary.** Two levels, two Englishes, at most. A character used the same way in
two hexagrams gets the same English in both.

---

## What it obliges

1. **Name a doubled hexagram from its own lines**, and say in its glossary entry how the trigram's
   image and the hexagram's name relate.
2. **Point a hexagram's `glossary_refs:` at its own entry**, not the trigram's.
3. **When a word was barred at one level, re-judge it at the other on its merits** — the reason it
   was barred is the thing to check.
