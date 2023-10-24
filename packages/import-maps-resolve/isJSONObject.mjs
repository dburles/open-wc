/**
 * @param {*} value
 * @returns {value is object}
 */
export default function isJSONObject(value) {
  return typeof value === 'object' && value != null && !Array.isArray(value);
}
