/**
 * 값이 공백이 아닌 문자열인지 확인한다.
 * @param {unknown} value - 검사할 값
 * @returns {boolean} 공백이 아닌 문자열이면 true
 */
export function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * 문자열 앞뒤 공백을 제거한다. 문자열이 아니면 빈 문자열을 반환한다.
 * @param {unknown} value - 처리할 값
 * @returns {string} trim된 문자열 또는 빈 문자열
 */
export function trimToString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

/**
 * 배열이 아니면 빈 배열을 반환한다.
 * @param {unknown} value - 검사할 값
 * @returns {Array} 배열이면 그대로, 아니면 빈 배열
 */
export function ensureArray(value) {
  return Array.isArray(value) ? value : [];
}
