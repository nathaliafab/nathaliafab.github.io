export type Lang = 'pt' | 'en';

/** Um texto nos dois idiomas. */
export type L<T = string> = Record<Lang, T>;
