/**
 * Create a unique collision-resistant ID.
 * Read more about kuid here - https://github.com/DakshMiglani/kuid
 */
declare const kuid: (() => string) & {
  /**
   * Create a shorter unique collision-resistant ID. Is 7 to 10 characters in length.
   */
  initPrefix: ((prefix: string) => void)
  slug: (() => string)
  /**
   * Check if string is a valid 'kuid'.
   *
   * @param kuid: string to check if it is a 'kuid'.
   */
  isKuid: ((kuid: string) => boolean)
  /**
   * Check if string is a valid 'kuid' slug.
   *
   * @param slug: string to check if it is a 'kuid' slug.
   */
  isSlug: ((slug: string) => boolean)
};

export = kuid;
