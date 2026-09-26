---
id: read-a-figure-through-its-spectrums
title: "Read a figure through its spectrums — the signature may suggest a candidate; only the lines admit it"
status: active
since: 2026-09-24
trigger: "you are about to settle the English for a hexagram, or for one of its lines, without having placed its two trigrams on their spectrums"
applies: [drafting, glossary]
evidence:
  - "../README.md#the-shape-of-the-figures"
  - "../hexagram-names.md#the-pattern-in-the-formation"
check: check
supersedes: []
---

# Read a figure through its spectrums — the signature may suggest a candidate; only the lines admit it

**The rule.** Before an English word is settled for a hexagram, place it: which spectrum and which
pole is the trigram within, which the trigram without, and is it doubled, crossed, or across two?
Then read the word against that signature — 31 咸 (*xián*) is *stopping within, releasing without*.
**A word the signature cannot account for gets a second look. A word the signature suggests is a
candidate, and nothing more: it is admitted only if it survives the hexagram's own lines**, because
the name comes from the lines.

**When it fires.** When a hexagram's English feels finished. Place the figure before you trust it.

---

## Why this holds

**The four spectrums are the book's own grammar for its figures, stated three times.** 說卦
(*shuōguà*) pairs the eight trigrams by image in ch 3 (天地定位，山澤通氣，雷風相薄，水火不相射), by
action in ch 7 (健順, 動入, 陷麗, 止說), and by the height of the odd line in ch 10 (一索, 再索, 三索 —
the first, second and third draw). Three independent arrangements that agree are the strongest
evidence a classical text gives — see
[`the-8-trigrams-are-arranged-in-4-pairs`](the-8-trigrams-are-arranged-in-4-pairs.md). A hexagram is
a place on that grammar, and **an English name that contradicts its own place is usually a name
chosen from one line at the expense of the figure.**

**It catches what the lines alone cannot.** A single line can support a word the whole figure
disowns. The signature is the one piece of evidence about a hexagram that is the same size as the
hexagram. It also catches **collisions across the set**: the eight crossed figures and the eight
doubled figures are each a matched family, and a name that breaks its family's pattern is visible
the moment the family is read together — [`a-closed-set-is-one-decision`](a-closed-set-is-one-decision.md).

**And it is dangerous in exactly proportion to how useful it is.** The 彖傳 (*tuànzhuàn*) reads at
least 33 of the 64 as *inner action + outer action* — 止而說, 動而說, 順以動 — which is a
ready-made two-word gloss for half the book, and the precise shape of a `render:`.
[`a-source-shaped-like-your-answer`](a-source-shaped-like-your-answer.md) is the rule for that, and
[`commentary-is-not-a-rendering`](https://github.com/opencosmos-ai/taoteching) is the parent's: the
signature is the Wings' reading, and it is evidence, not a word. **So it may widen the field of
candidates, and it may never close it.** What decides is the test the Wings cannot pass for you:
does the word work where the character stands in the judgment and the six lines?

---

## Why this principle exists

**The first full draft of the 64 names was checked against the signatures after the fact, and
the structure behind them had not been written down.** Asking whether the figures were built from
four pairs of qualities led to the three 說卦 chapters, the odd-line logic, the three classes and
the canon frame, all measured on 2026-09-24 — and to the recognition that the draft had been using
the frame informally and unevenly. Shalom asked that it be made central.
→ [`../hexagram-names.md`](../hexagram-names.md#the-pattern-in-the-formation)

**It is `active` by Shalom's ruling, 2026-09-24, not by the two-case threshold.** Its evidence so
far is one investigation, which by [`README.md`](README.md) counts as one case. Shalom
promoted it on the strength of the structure itself — stated three times by 說卦 and now enforced
by `npm run check` — rather than on its record in use. The first hexagram names drafted under it
are the second case this entry is owed.

**Amended the same day, before it merged — Shalom, 2026-09-24.** As first written, the rule said a
word the signature wrote was thrown out. When Shalom asked the signatures to inspire new
translations, that was changed to its present form: the signature may suggest a candidate; only the
lines admit it. The safeguard moved rather than weakened — from where a word came from to whether
it survives the text. It was amended in place rather than superseded because the first wording
never reached `main` and nothing quotes it.

---

## How it is implemented

| Where | What it does |
|---|---|
| **`trigrams/*.md`** | each trigram carries `spectrum`, `pole` and `odd_line`, so a figure's place is data, not memory |
| **`hexagrams/*.md`** → `signature:` | each hexagram's place — its class, and the spectrum and pole within and without — is on the page where it is named |
| **`generated/iching-data.ts`** | the trigram fields and each hexagram's signature reach the app, the signature derived by the build rather than copied |
| **`npm run check`** → *the four spectrums* | derives every field from the figure and 說卦 ch 3, and asserts the 8 / 8 / 48 classes and the canon frame — **the structure is enforced** |
| **[`../README.md`](../README.md#the-shape-of-the-figures)** | states the structure where every reader starts |
| **`--applies drafting`, `--applies glossary`** | loaded before anything is rendered and before a term is ruled |

**What is not enforced is the reading.** Whether a name answers to its signature is judgement,
and no script can do it without writing the names itself — which is the failure this rule exists
to prevent.

---

## Where it does not fire

**Not on the trigrams' own English.** A trigram *is* a pole; its English renders its image
([`the-image-names-the-trigram-the-lines-name-the-hexagram`](the-image-names-the-trigram-the-lines-name-the-hexagram.md)).

**Not as a licence for the spectrum's own words.** *Stopping* and *releasing* are this project's
reading of 止 and 說. A signature may suggest one as a candidate, like any other word; it does not
thereby become the English of every hexagram whose signature contains it.

**Not across the five phases.** 五行 (*wǔxíng*) assignments to the trigrams are Han-era and cut
across these pairs. They are a different system and never a check here.

---

## What it obliges

1. **Place the figure first** — spectrum and pole within, spectrum and pole without, and the
   class — and write the signature into the hexagram's glossary entry.
2. **Say how the name answers to it**, in a sentence, or say why it does not.
3. **Test every candidate the signature suggests against the lines, and record the result** —
   including the ones that fail, so the range is visible. A candidate that has not been tested
   against the lines has not been admitted; if the English came from the 彖傳's two actions and
   nowhere else, it came from commentary.
