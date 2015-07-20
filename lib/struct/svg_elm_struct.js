/**
 * String forsvg elm
 * @memberof module:fur/lib/struct
 * @inner
 * @constructor SvgElmStruct
 */

"use strict";

/** @lends SvgElmStruct */
function SvgElmStruct(values) {
    var s = this;
    s.set(values || {});
}

SvgElmStruct.prototype = {

    // --- Properties ---

    /** Value of id */
    _id: undefined,
    /** Value of xmlns */
    _xmlns: undefined,
    /** Value of data */
    _data: undefined,

    // --- Accessors ---

    /**
     * Get values.
     * @returns {object} values.
     */
    get: function () {
        var s = this;
        return {
            id: s.id(),
            xmlns: s.xmlns(),
            data: s.data()
        }
    },
    /**
     * Set values.
     * @param data - Data to set.
     * @returns Self.
     */
    set: function (data) {
        var s = this;
        s.id(data.id);
        s.xmlns(data.xmlns);
        s.data(data.data);
        return s;
    },
    /**
     * Get id value.
     * @function module:fur/lib/struct~SvgElmStruct.prototype.id
     * @returns Value of id.
     */
    /**
     * Set id value.
     * @function module:fur/lib/struct~SvgElmStruct.prototype.id
     * @param id - Value to set.
     * @returns Self.
     */
    id: function (id) {
        var s = this;
        if (arguments.length === 0) {
            return s._id;
        }
        s._id = id;
        return s;
    },
    /**
     * Get xmlns value.
     * @function module:fur/lib/struct~SvgElmStruct.prototype.xmlns
     * @returns Value of xmlns.
     */
    /**
     * Set xmlns value.
     * @function module:fur/lib/struct~SvgElmStruct.prototype.xmlns
     * @param xmlns - Value to set.
     * @returns Self.
     */
    xmlns: function (xmlns) {
        var s = this;
        if (arguments.length === 0) {
            return s._xmlns;
        }
        s._xmlns = xmlns;
        return s;
    },
    /**
     * Get data value.
     * @function module:fur/lib/struct~SvgElmStruct.prototype.data
     * @returns Value of data.
     */
    /**
     * Set data value.
     * @function module:fur/lib/struct~SvgElmStruct.prototype.data
     * @param data - Value to set.
     * @returns Self.
     */
    data: function (data) {
        var s = this;
        if (arguments.length === 0) {
            return s._data;
        }
        s._data = data;
        return s;
    },

    // --- Meta ---

    $keys:['id', 'xmlns', 'data']
};

module.exports = SvgElmStruct;