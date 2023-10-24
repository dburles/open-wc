import parse from './parse.mjs';

/** @typedef {import('./types').ParsedImportMap} ParsedImportMap */
/** @typedef {import('./types').ImportMap} ImportMap */

/**
 * @param {string} input
 * @param {URL} baseURL
 * @returns {ParsedImportMap}
 */
export default function parseFromString(input, baseURL) {
  const importMap = /** @type {ImportMap} */ (JSON.parse(input));
  return parse(importMap, baseURL);
}
