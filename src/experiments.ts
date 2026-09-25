/**
 * A/B experiments, one per page section.
 *
 * Each key is a section. Its variants are named slots on <Experiment name="…">
 * in src/pages/index.astro, and each variant is a component in src/sections/<key>/.
 *
 * Assignment happens in the browser (GitHub Pages is static): the inline script in
 * Base.astro picks a variant per experiment, weighted, remembers it in localStorage,
 * and stamps it on <html data-exp-<key>="<variant>">. Only that variant is displayed.
 * Without JavaScript the first variant shows.
 *
 * Force a variant for review: ?hero=b&join=a
 * The chosen set is registered as PostHog super properties (experiment_hero, …)
 * so every event, including waitlist_submitted, carries it.
 */
export type Experiment = {
  description?: string;
  variants: readonly string[];
  /** Same length as variants. Omit for an even split. */
  weights?: readonly number[];
};

export const experiments = {
  hero: { description: 'Opening angle: question vs curiosity hook', variants: ['a', 'b'], weights: [50, 50] },
  mechanism: { description: 'How it works', variants: ['a'] },
  research: { description: 'Evidence section', variants: ['a'] },
  program: { description: 'Protocol and commitment', variants: ['a'] },
  join: { description: 'Sign-up CTA', variants: ['a'] },
} as const satisfies Record<string, Experiment>;

export type ExperimentName = keyof typeof experiments;
