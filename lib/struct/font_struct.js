/**
 * String forfont
 * @memberof module:fur/lib/struct
 * @inner
 * @constructor FontStruct
 */

"use strict";

/** @lends FontStruct */
function FontStruct(values) {
    var s = this;
    s.set(values || {});
}

FontStruct.prototype = {

    // --- Properties ---

    /** Value of src */
    _src: undefined,
    /** Value of size */
    _size: undefined,

    // --- Accessors ---

    /**
     * Get values.
     * @returns {object} values.
     */
    get: function () {
        var s = this;
        return {
            src: s.src(),
            size: s.size()
        }
    },
    /**
     * Set values.
     * @param data - Data to set.
     * @returns Self.
     */
    set: function (data) {
        var s = this;
        s.src(data.src);
        s.size(data.size);
        return s;
    },
    /**
     * Get src value.
     * @function module:fur/lib/struct~FontStruct.prototype.src
     * @returns Value of src.
     */
    /**
     * Set src value.
     * @function module:fur/lib/struct~FontStruct.prototype.src
     * @param src - Value to set.
     * @returns Self.
     */
    src: function (src) {
        var s = this;
        if (arguments.length === 0) {
            return s._src;
        }
        s._src = src;
        return s;
    },
    /**
     * Get size value.
     * @function module:fur/lib/struct~FontStruct.prototype.size
     * @returns Value of size.
     */
    /**
     * Set size value.
     * @function module:fur/lib/struct~FontStruct.prototype.size
     * @param size - Value to set.
     * @returns Self.
     */
    size: function (size) {
        var s = this;
        if (arguments.length === 0) {
            return s._size;
        }
        s._size = size;
        return s;
    },

    // --- Meta ---

    $keys:['src', 'size']
};

module.exports = FontStruct;