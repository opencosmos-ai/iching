---
id: an-instrument-is-not-a-witness-to-itself
title: "An instrument's confidence in itself is not evidence, and neither is a plausible mechanism"
status: provisional
since: 2026-09-12
trigger: "a tool reports how well it did, or you can explain why a result came out the way it did, and you are about to believe either one"
applies: [tooling, sources]
evidence:
  - "../sources/PROVENANCE.md#two-witnesses-and-what-their-agreement-is-worth"
check: ocr-consensus
supersedes: []
---

# An instrument's confidence in itself is not evidence, and neither is a plausible mechanism

**The rule.** A tool's own account of its accuracy tells you nothing about the artefact. Neither does a mechanism you can explain. Both are hypotheses, and the only thing that settles either is a measurement against something outside the tool — a second instrument, a hand-checked sample, a count someone else could repeat.

**When it fires.** Whenever a confidence score, a quality flag, or a well-reasoned explanation is about to stand in for a number. Especially when the explanation is *good*: a mechanism that sounds right is the most expensive kind of wrong, because it stops the measuring.

---

## Why this holds

**A confident engine and an accurate engine look identical from inside.** A self-reported confidence is the engine's opinion of its own output, and an engine that is wrong about the page is wrong about itself in the same way. Nothing in the self-report is available to catch that.

**Agreement between separately-trained instruments *is* informative, and that is the difference.** Tesseract and Vision fail on different characters because they were built by different people on different data. Where they independently produce the same word the residual error is 3.9%, against 10.5% and 19.8% for either alone. Neither engine could have told you that about itself; only the comparison could.

**And the mechanism can be impeccable and still false.** A textbook explanation for a textbook symptom is still a hypothesis. A parameter sweep settles it in minutes; reasoning about it costs hours, and can arrive confidently at the wrong answer.

**This is the parent's `evidence-gate` pointed at the tools instead of the text.** That rule says a gate which cries wolf is not a gate. This one says a gate grading its own homework was never a gate at all.

---

## Why this principle exists

Both halves of the rule came out of one investigation into the McClatchie OCR. Apple Vision read the body at a mean confidence of 0.98 — median 1.00, nothing below 0.67 — while getting roughly one word in five wrong; the first import had recorded that figure into `Page.conf` and never used it, the right instinct for the wrong reason. And the pages were 600 DPI rasters rendered at 216, a textbook downsampling mistake with a textbook explanation — which was wrong. The source is bitonal, downsampling anti-aliases the glyphs into what the engines expect, and native resolution scored **worse** (16.6% against 13.7%). The setting that looked like the bug was the best one available, and an afternoon went into a hypothesis one sweep would have refuted in ten minutes.

**Vision's 0.98 confidence on 19.8%-wrong text, and what a second engine showed instead.** The self-report was useless; cross-engine agreement localised 73% of the remaining error into 27% of the words, and that list is [`disputed.yaml`](../sources/mcclatchie-1876/disputed.yaml). → [PROVENANCE](../sources/PROVENANCE.md#two-witnesses-and-what-their-agreement-is-worth)

**The resolution hypothesis, which was mechanically sound and empirically backwards.** 600 DPI was measured against 216 on the same pages rather than assumed, and lost. → [PROVENANCE](../sources/PROVENANCE.md#two-witnesses-and-what-their-agreement-is-worth)

*Both cases come out of one investigation, which is why this is `provisional`. It earns `active` the first time it fires somewhere unrelated — and the place to watch is the Chinese pages, where the argument for deferring rests on a claim about what OCR can do that has not been measured since 2026-09-11.*

---

## How it is implemented

| Where | What it does |
|---|---|
| **`scripts/ocr-consensus.ts`** | diffs independent OCR passes over the same scan and classifies — corroborated text on one side, a finite list of disputed spans on the other, written to `disputed.yaml`. It does not vote and it does not repair |
| **`README.md`** | `--applies tooling` lists it before anything in `scripts/` changes |
| **`sources/PROVENANCE.md`** → *The admission rules* | `--applies sources` lists it before anything is vendored, graded or re-imported |

**Partly enforced.** The McClatchie consensus is measured; whether the next tool's self-report is trusted is judgment.

---

## Where it does not fire

**A tool that reports what it did, rather than how well it did it, is just data.** A page count, a byte count, a list of files touched — these are observations, not self-assessments, and the importer's structural tallies (`lines_found:`, 57 of 64 numbers agreeing) are of that kind. The distinction is whether the number is the tool's opinion of its own output.

**And it does not license a second instrument as a repair.** Knowing where two engines disagree says where to look, never what the page says. Choosing between their readings is [[never-supply-what-the-source-withheld]]'s territory and needs the scan.

---

## What it obliges

1. **Never write a quality claim you did not measure.** This is [[a-grade-must-be-testable]] one layer down: that rule governs the grade on a file, this one governs the instrument that produced it.
2. **Measure against something that did not produce the result** — a second tool, a hand-keyed sample, an independent count.
3. **Sweep the parameter before explaining it.** If a setting looks wrong, the cost of testing it is usually minutes and the cost of reasoning about it is usually hours.
4. **Record the refuted hypothesis, not just the finding.** "600 DPI is worse, and here is the number" stops the next reader from re-running the same afternoon.
