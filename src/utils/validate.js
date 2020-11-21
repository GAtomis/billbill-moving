/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
    const valid_map = ['admin', 'editor', 'ELC', 'ITD', 'Test']
    return valid_map.indexOf(str.trim()) >= 0
}
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isPhoneNum(path) {
    return /^1[3456789]\d{9}$/.test(path)
}