# Contributing

*You are welcome here, and much of the useful work needs no Chinese at all.*

This is an open translation of the I Ching, read through the Ten Wings, together
with the public-domain evidence every rendering has to answer to. It is dedicated
[CC0](LICENSE): public domain, no rights reserved. By contributing, you agree
that your contribution is dedicated the same way.

It is the sibling of the [Tao Te Ching translation](https://github.com/opencosmos-ai/taoteching),
and inherits that project's method, locks and principles. Its
[CONTRIBUTING](https://github.com/opencosmos-ai/taoteching/blob/main/CONTRIBUTING.md)
is the fuller version of this one.

---

## First, the honest part

**One person decides.** Shalom translates this book and makes the final call on
every rendering. [`method.md`](method.md) says why the verse stays his own:
sources are consulted for *meaning*, never for *phrasing*. So a pull request that
changes English is a **proposal to an editor**, and some will be declined for
reasons of consistency you could not have known about.

**What that buys you:** disagreement is wanted. Several rulings in the parent
project exist because someone said a word felt wrong and was right.

**Where the work is.** The eight trigrams are drafted. The sixty-four hexagram
names and their line texts are not yet ([`WORKLIST.md`](WORKLIST.md) A7–A8), and
they are being decided in an order the worklist sets. Proposals for those are
welcome as issues, not yet as pull requests.

---

## Four ways in, easiest first

### 1. Report a source error — no Chinese needed

`sources/` holds vendored public-domain editions: Legge (1882), de Harlez (1889)
and McClatchie (1876), with McClatchie's English read by OCR. If a line doesn't
match the printed page, that is a real error, and a small, valuable report.

**Nothing in `sources/` is hand-edited.** Every file there is written by the
importer, so please don't fix it in a pull request.
[Open a "Source error" issue](https://github.com/opencosmos-ai/iching/issues/new?template=source-error.md)
with the file, the line, and the edition or scan page you checked against. The
fix goes into the importer, so it survives the next import.

### 2. Flag an overlay

An overlay is a place where a translation carries an assumption the Chinese does
not: a deity where the text has sky, a king where it has a ruler, a moral
verdict where it has an omen. [`method.md` § 4](method.md#4-the-overlay-in-this-book)
keeps this book's watchlist. If you see another, in a source or in a draft,
[open an "Overlay" issue](https://github.com/opencosmos-ai/iching/issues/new?template=overlay.md).

### 3. Argue with a rendering

If you have checked a trigram or a glossary entry against the Chinese and think
it should read differently,
[open a "Rendering proposal" issue](https://github.com/opencosmos-ai/iching/issues/new?template=rendering-proposal.md).
Say what the current rendering *loses*, not only that it is wrong.

**House rule, inherited from the parent project:** every Chinese character you
cite gets an English gloss beside it, every time: 天 (*tiān*, sky), never a bare
天. Unglossed Chinese turns a question into one that can't be answered.

### 4. Improve the tooling

`scripts/` is TypeScript run with `tsx`. [`WORKLIST.md`](WORKLIST.md) § C lists
the open tooling work, and some of it is labelled
[good first issue](https://github.com/opencosmos-ai/iching/labels/good%20first%20issue).

```bash
npm install
npm run check                   # the hexagram table, trigrams, and the generated file
npm run principles -- --check   # every principle's anchors resolve
```

CI runs both on every pull request. `generated/iching-data.ts` is copied by
[opencosmos](https://github.com/opencosmos-ai/opencosmos), so `npm run check`
failing on drift is protecting the site.

---

## Every claim carries its evidence

A rendering, a correction or an overlay is only as good as the source you can
point at: the graph, the Wings, a page of a named edition. "This is wrong" invites
a shrug. "This is wrong, and here is 說卦 (*Shuōguà*, the Discussion of the
Trigrams) chapter 11 showing why" changes the file.

## Where else to go

- **An error in a Library text or quote** → [knowledge](https://github.com/opencosmos-ai/knowledge/issues)
- **The Tao Te Ching** → [taoteching](https://github.com/opencosmos-ai/taoteching)
- **How the pieces fit** → the [organization profile](https://github.com/opencosmos-ai)
