/**
 * Generate a hash code from string.
 * @memberof module:fur/lib/util/hash
 * @function hashCode
 * @param {string} string - String to hash.
 * @returns {number} - Hash code number.
 * @see http://erlycoder.com/49/javascript-hash-functions-to-convert-string-into-integer-hash-
 */

/** @lends hashCode */
function hashCode(string) {
    var i, char;
    var hash = 0;
    if (string.length == 0) return hash;
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

module.exports = hashCode;