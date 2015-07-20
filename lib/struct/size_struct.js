/**
 * String forsize
 * @memberof module:fur/lib/struct
 * @inner
 * @constructor SizeStruct
 */

"use strict";

/** @lends SizeStruct */
function SizeStruct(values) {
    var s = this;
    s.set(values || {});
}

SizeStruct.prototype = {

    // --- Properties ---

    /** Value of width */
    _width: undefined,
    /** Value of height */
    _height: undefined,

    // --- Accessors ---

    /**
     * Get values.
     * @returns {object} values.
     */
    get: function () {
        var s = this;
        return {
            width: s.width(),
            height: s.height()
        }
    },
    /**
     * Set values.
     * @param data - Data to set.
     * @returns Self.
     */
    set: function (data) {
        var s = this;
        s.width(data.width);
        s.height(data.height);
        return s;
    },
    /**
     * Get width value.
     * @function module:fur/lib/struct~SizeStruct.prototype.width
     * @returns Value of width.
     */
    /**
     * Set width value.
     * @function module:fur/lib/struct~SizeStruct.prototype.width
     * @param width - Value to set.
     * @returns Self.
     */
    width: function (width) {
        var s = this;
        if (arguments.length === 0) {
            return s._width;
        }
        s._width = width;
        return s;
    },
    /**
     * Get height value.
     * @function module:fur/lib/struct~SizeStruct.prototype.height
     * @returns Value of height.
     */
    /**
     * Set height value.
     * @function module:fur/lib/struct~SizeStruct.prototype.height
     * @param height - Value to set.
     * @returns Self.
     */
    height: function (height) {
        var s = this;
        if (arguments.length === 0) {
            return s._height;
        }
        s._height = height;
        return s;
    },

    // --- Meta ---

    $keys:['width', 'height']
};

module.exports = SizeStruct;