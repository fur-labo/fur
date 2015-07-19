/**
 * Convert index to theme name.
 * @memberof module:fur/lib/theming
 * @function themeNameWithIndex
 * @param {number} n - Index to convert.
 * @returns {string} - Theme name.
 */

"use strict";

var CHAR_CODE_START = 97,
    CHAR_CODE_RANGE = 26;

/** @lends themeNameWithIndex */
function themeNameWithIndex(n) {
    var result = '';
    if (n >= CHAR_CODE_RANGE) {
        result = themeNameWithIndex(parseInt(n / CHAR_CODE_RANGE) - 1);
    }
    result += String.fromCharCode(CHAR_CODE_START + n % CHAR_CODE_RANGE);
    return result;
}

module.exports = themeNameWithIndex;
