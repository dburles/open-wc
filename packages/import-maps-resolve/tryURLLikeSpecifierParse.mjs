import tryURLParse from './tryURLParse.mjs';

/**
 * @param {string} specifier
 * @param {URL} baseURL
 * @returns {URL | undefined}
 */
export default function tryURLLikeSpecifierParse(specifier, baseURL) {
  if (specifier.startsWith('/') || specifier.startsWith('./') || specifier.startsWith('../')) {
    return tryURLParse(specifier, baseURL);
  }

  const url = tryURLParse(specifier);
  return url;
}
