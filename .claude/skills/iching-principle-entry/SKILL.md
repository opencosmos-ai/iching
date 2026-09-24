---
name: iching-principle-entry
description: Recognize, record, or revise a principle in the I Ching translation's principles/ directory — the transferable rules this project learns by making particular decisions. Use when working in the I Ching repository and a decision yields a rule that will govern hexagrams, trigrams or sources nobody has worked on yet, when the user says "that's a principle" or "worth keeping", when auditing existing entries, or when an entry needs promoting, demoting or superseding. Inherits the Tao Te Ching project's principle-entry procedure and binds it to this repository's paths, scopes and build.
---

# Recording a principle — the I Ching project

**This is the Tao Te Ching project's [`principle-entry`](https://github.com/opencosmos-ai/taoteching/blob/main/process/skills/principle-entry/SKILL.md) procedure, bound to this repository.** The steps are the parent's; the paths, scopes, loaders and build command are this project's. **The reasoning for each step lives in the parent** and is linked rather than copied — two copies of an argument is how one of them goes stale. That is this project's own [`inheriting-means-saying-where-you-differ`](../../../principles/inheriting-means-saying-where-you-differ.md), applied to its tooling.

**Gloss every Chinese character, every time** — 貞 (*zhēn*), never bare 貞. Shalom does not read Chinese.

## What differs from the parent

| | Tao Te Ching project | here |
|---|---|---|
| **Directory** | `process/principles/` | `principles/` |
| **Build** | `python3 tools/build_principles.py` | `npm run principles` · `-- --check` · `-- --applies <scope>` |
| **Scopes** | drafting · glossary · notes · tooling · process | drafting · glossary · **sources** · tooling · process — no `notes` layer here |
| **Loaders** | the skills and `CLAUDE.md` | `method.md`, `glossary/README.md`, `sources/PROVENANCE.md`, `README.md` — table in `principles/README.md` |
| **Inheritance** | — | **the parent's principles apply here in full and are never restated** |

---

## 0. First, is it the parent's — or already here?

**This directory's first rule** ([`principles/README.md`](../../../principles/README.md#the-first-rule-of-this-directory-do-not-restate-the-parents)): the parent's principles apply here in full. Ask in this order:

1. **Is it one of the parent's?** Then link to it from `method.md` § 6 and stop. Read the parent's index: <https://github.com/opencosmos-ai/taoteching/blob/main/process/principles/INDEX.md>
2. **Is it a sharpening of one of the parent's?** Then it goes in `method.md` § 6, under that principle, as a note on how this book bites harder.
3. **Is it already here?**

```bash
npm run principles -- --applies sources     # or drafting, glossary, tooling, process
grep -i "<a keyword from your rule>" principles/principles.yaml
```

Only if all three are no does it belong in `principles/`. A near-match usually wants your case added to its `evidence:`, which is also how a `provisional` entry earns `active`.

## 1. Detection

The parent's three passes — self-declared rules, principle-shaped sentences, and **repeated reasons**, the richest — [reasoning here](https://github.com/opencosmos-ai/taoteching/blob/main/process/skills/principle-entry/SKILL.md#1-detection--three-passes-decreasing-precision). Run them over this repository's prose:

```bash
grep -rniE "standing principle|general rule|the lesson|worth keeping" method.md sources/PROVENANCE.md glossary/ hexagrams/ trigrams/ WORKLIST.md CHANGELOG.md tao-te-ching-relation.md
```

**Most of what this project has learned is about evidence**, because the sources arrived damaged before a word was rendered. Look hardest in `sources/PROVENANCE.md` and in the importers' header comments.

## 2. Write the trigger

**If you cannot write `trigger:`, you do not have a principle.** Complete *"When you are about to ___, this fires,"* in the second person and the present tense, describing the act and not the virtue. It must name no hexagram or source to make sense, and must not fire on everything. [The parent's worked triggers](https://github.com/opencosmos-ai/taoteching/blob/main/process/skills/principle-entry/SKILL.md#2-the-test-that-decides-write-the-trigger).

## 3. Write the entry

**The shape is enforced by the build** — [`principles/README.md` → *The shape of an entry*](../../../principles/README.md#the-shape-of-an-entry):

- **The rule.** · **When it fires.**
- `## Why this holds` — the general argument, present tense: why it is true of scanned books, of classical Chinese, of this kind of work
- `## Why this principle exists` — **the failure story, once**, with the cases linked
- `## How it is implemented`
- `## Where it does not fire`
- `## What it obliges`

**Tell the story once.** Does a sentence say what **is** true, or what **happened**? Only the second belongs in *Why this principle exists*, and only there. Link to the full account in `sources/PROVENANCE.md`, `method.md` or a glossary entry; do not restate it.

## 4. Make it run

**A principle that lives only in `principles/` is read after the mistake.** Put the answers in *How it is implemented*:

1. **At what step does someone meet the trigger's moment?** Usually an importer (`scripts/import-iching-sources.ts`), a section of `method.md`, `sources/PROVENANCE.md`, or a glossary entry. If the step says nothing about the rule, add the line.
2. **Can anything enforce it?** The importer fails a run rather than write an unverified file; `scripts/ocr-consensus.ts` measures instruments against each other. If a script enforces it, set `check:` to its name and name it in the section. If nothing can, say so and say why.
3. **Is it loaded?** Choose `applies:` from the loader table in `principles/README.md`. The build refuses an entry whose scopes nothing loads.

## 5. The threshold

**`provisional` until two independent cases, then `active`.** The build enforces it. Two cases from one investigation are one case — `an-instrument-is-not-a-witness-to-itself` is `provisional` for exactly that reason.

## 6. Anchors

`evidence:` entries are paths **relative to `principles/`** with a heading anchor — `../sources/PROVENANCE.md#the-admission-rules`. The anchor follows GitHub's rule: lowercase, punctuation dropped, spaces to hyphens. **The build verifies every one resolves**, so run `--check` rather than guessing. If the target has no stable heading, add one; never link to a line number.

## 7. Revising

Promote, demote or supersede as the parent does — and **never delete**. [The parent's rules](https://github.com/opencosmos-ai/taoteching/blob/main/process/skills/principle-entry/SKILL.md#7-revising-promote-demote-supersede).

## 8. Finish — every time

```bash
npm run principles
```

Regenerates `principles/INDEX.md` and `principles/principles.yaml`, and verifies the frontmatter, the threshold, every anchor, every entry's shape, and that every scope is loaded. Any failure writes nothing. **Never edit the generated files by hand.**

**Report**: the rule, the trigger, the cases, where it is implemented, and whether it shipped `provisional` or `active`. **If it departs from a parent principle, say so in the entry** — that is the rule this project is built on.
