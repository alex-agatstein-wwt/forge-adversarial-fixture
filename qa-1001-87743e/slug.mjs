/**
 * Convert a string to a URL-safe slug.
 * - Converts to lowercase ASCII
 * - Collapses whitespace and punctuation to single hyphens
 * - Trims leading/trailing hyphens
 * - Returns empty string for empty or only-punctuation input
 * 
 * @param {string} text - Input string to slugify
 * @returns {string} URL-safe slug
 */
export function slugify(text) {
  if (!text || typeof text !== 'string') {
    return '';
  }

  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
