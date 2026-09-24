---
id: a-grade-must-be-testable
title: "A provenance grade the importer cannot test is a claim, not a grade"
status: active
since: 2026-09-11
trigger: "you are about to mark a vendored file as proofread, verified, complete or authoritative"
applies: [sources, tooling]
evidence:
  - "../sources/PROVENANCE.md#legge-1882--the-yî-king"
  - "../sources/PROVENANCE.md#mcclatchie-1876--vendored--updated-2026-09-11"
check: import-sources
supersedes: []
---

# A provenance grade the importer cannot test is a claim, not a grade

**The rule.** Where vendored files carry grades — proofread against OCR, complete against partial, verified against assumed — the importer must **test the grade it is about to write** and demote anything that fails. A grade asserted from where the file came from is a claim about a source, not a fact about a file.

**When it fires.** Whenever a `transcription:`, `status:` or coverage field is about to be set, and whenever a source is described as better than another.

---

## Why this holds

**A file that looks proofread and is not is more dangerous than a file that is obviously OCR.** Damaged OCR announces itself: a reader meets `Dingram` and `frults` and calibrates accordingly. A page carrying a proofread badge is read at face value, and an error in it propagates with the badge's authority attached. **The grade is a promise to a later reader, and an untested promise is worse than none.**

**Provenance is a property of the channel; quality is a property of the artefact**, and the two come apart. A genuinely human-proofread channel can still deliver a page that is not what it claims to be, and nothing about where the page came from will catch it. Only counting what came out will.

**The test can be cheap and still be decisive.** Where a source prints a fixed structure — Legge's six numbered paragraphs per hexagram, seven for the first two — requiring exactly that of a "proofread" page is three lines of code.

**And where grades differ, the better one is also the measuring stick for the worse.** Run the lower-grade extractor over a stretch where a proofread answer already exists, and it produces a number before it is trusted with the stretch where none does. The grade is then earned rather than asserted.

---

## Why this principle exists

English Wikisource's Legge is a human-proofread channel, and one of its pages was nonetheless a broken transclusion — a fragment of the translation plus the *neighbouring hexagram's* footnote. Nothing about its provenance could have caught that. Requiring the full paragraph count did: it demoted hexagram 32 to the OCR grade rather than shipping it as the best-graded file in the set. And the OCR extractor earned its own grade the same way, scoring 99.3% word agreement on the stretch where a proofread answer existed before it was trusted with the stretch where none did.

**Legge 1882 is vendored at two grades, and hexagram 32 was demoted between them.** Its English Wikisource page looks finished and is not; the importer now requires every proofread page to yield its full paragraph count, and anything short falls back to the scan. → [PROVENANCE](../sources/PROVENANCE.md#legge-1882--the-yî-king)

**McClatchie's grade is the lowest here and is stated in every file.** A scan of a photo-reproduction, OCR'd locally; 40 of 64 sections yield all six line paragraphs, and each file carries `lines_found:` and `sections:` saying exactly what it has. → [PROVENANCE](../sources/PROVENANCE.md#mcclatchie-1876--vendored--updated-2026-09-11)

---

## How it is implemented

| Where | What it does |
|---|---|
| **`scripts/import-iching-sources.ts`** (`npm run import-sources`) | tests each grade before writing it: a proofread Legge page must yield its full paragraph count, and one that falls short is imported at the OCR grade instead. The grade goes into the file's own frontmatter |
| **`sources/PROVENANCE.md`** → *The admission rules* | `--applies sources` lists it before anything is vendored, graded or re-imported |
| **`README.md`** | `--applies tooling` lists it before anything in `scripts/` changes |

**Enforced by the importer** for every grade it writes. A new source needs its own test; nothing forces one to be written.

---

## Where it does not fire

**Rights are not a grade.** Whether a file may be here is settled by `../sources/PROVENANCE.md`'s admission rules and is a separate question from whether it came out intact. A perfectly clean transcription of something inadmissible is still inadmissible.

**And a grade with genuinely nothing to test against is written as such.** Where no expected shape exists, say so in the frontmatter rather than inventing a check to have one — the parent's `evidence-gate` rule, that a gate which cries wolf is not a gate.

---

## What it obliges

1. **Write the test before the badge.** If you cannot say what a well-formed file of this kind looks like, you cannot grade it.
2. **Demote automatically.** A failing file changes grade in the importer, not in a note asking someone to remember.
3. **Put the grade in the file**, not only in the documentation, so it travels with the text.
4. **Score one grade against another wherever both exist**, and publish the number.
