/**
 * @param {string} string
 * @param {URL} [baseURL]
 * @returns {URL | undefined}
 */
export default function tryURLParse(string, baseURL) {
  try {
    return new URL(string, baseURL);
  } catch (e) {
    return undefined;
  }
}
