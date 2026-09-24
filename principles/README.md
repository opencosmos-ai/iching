# Principles — the rules this project learned

*[`../README.md`](../README.md) says **what is here**. [`../method.md`](../method.md) says **how a rendering gets made**. [`../sources/PROVENANCE.md`](../sources/PROVENANCE.md) says **what may be vendored and on what authority**. This directory says **what we learned** — the transferable rules discovered while making particular decisions, which then govern every decision after.*

**The form is the Tao Te Ching project's, copied deliberately.** Its [`process/principles/`](https://github.com/opencosmos-ai/taoteching) was argued out over months, and there is no reason for a neighbouring project to re-derive a good design badly. Read that directory's README for the reasoning behind the frontmatter, the `trigger:` field and the evidence threshold; this file says only what differs here.

**`INDEX.md` and `principles.yaml` are generated — never hand-edit them.**

---

## The first rule of this directory: do not restate the parent's

This project **inherits the Tao Te Ching project's principles wholesale**, and `../method.md` § 6 names the ones that fire hardest on this book. [`repeat-yourself`](https://github.com/opencosmos-ai/taoteching), [`already-spoken-for`](https://github.com/opencosmos-ai/taoteching), [`commentary-is-not-a-rendering`](https://github.com/opencosmos-ai/taoteching), [`renders-no-character`](https://github.com/opencosmos-ai/taoteching) and the rest apply here in full force and **are not repeated here**.

Copying them across would rebuild exactly the failure the parent's README warns about: two copies of a rule, one of which goes stale. **An entry belongs here only if the parent's do not already contain it.** *(The parent's are not counted here: a hand-kept count of another repository's directory is exactly the second copy that goes stale.)*

The honest test, asked in this order:

1. **Is it one of the parent's?** Then link to it from `../method.md` § 6 and stop.
2. **Is it a sharpening of one of the parent's?** Then it goes in that section of `../method.md`, under the inherited principle, as a note on how this book bites harder. `already-spoken-for` needing seventy-two distinct English words is a sharpening, not a new rule.
3. **Does it tell you something about work nobody has started yet, that the parent's do not?** Then it belongs here.

---

## What belongs here, and what does not

| | Goes where | Why |
|---|---|---|
| **A transferable rule this project discovered** | **here** | it governs work nobody has started |
| A rule the Tao Te Ching project already holds | **not here** — link to it from `../method.md` § 6 | two copies, one goes stale |
| How this book sharpens an inherited rule | `../method.md`, under that rule | it is a note on a rule, not a rule |
| The case for one rendering of one hexagram | `../hexagrams/NN.md` | someone working there will find it |
| Why a *term* renders as it does | a glossary entry — **which does not exist yet**, see `../method.md` § 7 | |
| Whether a source may be vendored, and on what authority | `../sources/PROVENANCE.md` | that file is the authority on rights |
| What a particular importer does | the header comment of the importer | |
| An open question with no answer yet | `../method.md` § 4, the watchlist | a question is not a rule |
| When something arrived, or a stance reversed | `../CHANGELOG.md` | a date is not a rule |

---

## Why this directory exists at all, and why it is mostly about evidence

The parent project's principles are overwhelmingly about **drafting** — how to get from a character to an English word without importing something the Chinese does not say. That is the hard part over there, because the text arrived long ago and is not in doubt.

**Here the hard part came first, and it was the evidence itself.** Five sources were vendored before a single word was rendered, and every one of them arrived damaged in a different way: a wiki page that looked proofread and was a broken transclusion; a scan whose roman numerals read `LI 1 1.`; a book whose printed hexagram numbers were less reliable than the order they sat in; a PDF with no text layer at all; a bilingual edition whose Chinese half no OCR here can read.

So most of what this project has learned so far is about **how to turn damaged evidence into something a later reader may safely treat as evidence** — and none of it is in the parent's, because the Tao Te Ching never had to.

That will change. When the renderings start, the entries that follow them will be about drafting, and at that point the balance in `applies:` should shift. **If it does not, that is a sign this project is still building instruments instead of translating.**

---

## Frontmatter

Identical to the parent's, and the generator enforces it:

```yaml
---
id: order-assigns-the-label-verifies
title: "Where the label is the damaged thing, order assigns and the label checks"
status: active
since: 2026-09-11
trigger: "a source carries both a position and an identifier, and you are about to trust the identifier"
applies: [tooling, sources]
evidence: ["../sources/PROVENANCE.md#harlez-1889--le-yih-king", "../sources/PROVENANCE.md#mcclatchie-1876--vendored--updated-2026-09-11"]
check: none
supersedes: []
---
```

| Field | Meaning |
|---|---|
| `id` | kebab-case slug; the filename is `<id>.md`, and other entries link as `[[id]]` |
| `title` | the rule in one sentence, stated as a rule and not as a topic |
| `status` | `provisional` · `active` · `superseded` |
| `since` | the date the rule was first stated |
| `trigger` | **what makes it actionable.** Written so someone about to do the thing recognises themselves |
| `applies` | `drafting` · `glossary` · `sources` · `tooling` · `process` — **must include one that something loads**, and the build checks |
| `evidence` | links to the decisions that produced it — **the build verifies every anchor resolves** |
| `check` | the tool that enforces it, or `none` |
| `supersedes` | ids this replaces |

**The evidence threshold is the parent's and is enforced here by the generator:** `status: active` requires **two or more independent cases**. One case is an observation. A build that finds an `active` entry with fewer than two fails.

**Two differences from the parent's scopes.** `sources` is added — the parent has no category for it because it has no equivalent of `../sources/PROVENANCE.md` as a separate authority. And `notes` is absent — this project has no notes layer; a decision lives in its hexagram, trigram or glossary file.

---

## The shape of an entry

**The parent's, unchanged, and enforced here by the same checks.** Read [its README → *The shape of an entry*](https://github.com/opencosmos-ai/taoteching/blob/main/process/principles/README.md#the-shape-of-an-entry) for the reasoning; this section says only what differs.

In short: **The rule.** and **When it fires.** at the top, then five sections in this order — *Why this holds · Why this principle exists · How it is implemented · Where it does not fire · What it obliges*. **The failure story is told once**, in *Why this principle exists*; every other section says what the rule is and how it works, in the present tense. *How it is implemented* names the place the rule is met, what enforces it if anything, and the loader that surfaces it — and says honestly when nothing enforces it.

### Where each kind of work loads its principles here

| `applies:` | Loaded by | When |
|---|---|---|
| `drafting` | `../method.md` § 2 | before anything is rendered |
| `glossary` | `../glossary/README.md` | before a term is ruled on |
| `sources` | `../sources/PROVENANCE.md` → *The admission rules* | before anything is vendored, graded or re-imported |
| `tooling` | `../README.md` | before anything in `scripts/` changes |
| `process` | `../method.md` § 0 | every session |

Each loader is one line — `npm run principles -- --applies <scope>` — at the moment that work begins. **The build refuses an entry none of whose scopes is loaded, and refuses a scope that nothing loads.** The command lists this project's principles only; `../method.md` § 6 names the parent's that fire hardest here.

### And the writing itself

The parent's rules, with this book's examples: argue generally — why the rule is true of scanned books, of classical Chinese, of this kind of work, rather than of one file. Gloss every Chinese character, every time: 貞 (*zhēn*), never bare 貞. Lowercase everything but the Tao.

`../.claude/skills/iching-principle-entry` is the procedure that produces an entry of this shape.

---

## Finish — every time

```bash
npm run principles              # build, verify, write INDEX.md and principles.yaml
npm run principles -- --check   # verify only, write nothing
```

Regenerates `INDEX.md` and `principles.yaml`, checks the evidence threshold on every `active` entry, **verifies every `evidence:` anchor resolves to a real heading in the file it names**, and **verifies every entry's shape and that every scope is loaded**. Any failure writes nothing. A reworded heading in `PROVENANCE.md` becomes a build error rather than a dead link.
