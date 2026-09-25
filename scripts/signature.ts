/**
 * A hexagram's place on the four spectrums, derived from its two trigrams.
 *
 * The trigram data in trigrams/*.md is the source of truth — each trigram's
 * `spectrum` and `pole`, themselves checked against the figure and 說卦 by
 * `npm run check`. A hexagram's signature is only ever computed from them:
 * build-iching.ts emits it into generated/iching-data.ts, seed-iching.ts writes
 * it into hexagrams/*.md for a reader, and check-iching.ts fails if that copy
 * disagrees with this. README.md § The shape of the figures has the argument.
 */

export type Pole = 'yang' | 'yin'
export type Place = { spectrum: string; pole: Pole }

/**
 * `doubled` — one pole twice (乾, 坤, 坎, 離, 震, 艮, 巽, 兌).
 * `crossed` — both poles of one spectrum (泰, 否, 咸, 恆, 損, 益, 既濟, 未濟).
 * `across` — one pole of each of two spectrums; the other 48.
 */
export type Class = 'doubled' | 'crossed' | 'across'

export type Signature = { class: Class; within: Place; without: Place }

type TrigramPlace = { id: string; spectrum: string; pole: Pole }

/** Within is the lower trigram, without the upper — the figure reads bottom to top. */
export function signatureOf(lower: TrigramPlace, upper: TrigramPlace): Signature {
  const cls: Class = lower.spectrum !== upper.spectrum ? 'across' : lower.id === upper.id ? 'doubled' : 'crossed'
  return {
    class: cls,
    within: { spectrum: lower.spectrum, pole: lower.pole },
    without: { spectrum: upper.spectrum, pole: upper.pole },
  }
}

/** The frontmatter line, one flow mapping — the same shape as `trigrams:`. */
export const signatureYaml = (s: Signature) =>
  `signature: { class: "${s.class}", within: { spectrum: "${s.within.spectrum}", pole: "${s.within.pole}" }, without: { spectrum: "${s.without.spectrum}", pole: "${s.without.pole}" } }`
