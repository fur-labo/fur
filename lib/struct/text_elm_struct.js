/**
 * Struct for text elm
 * @memberof module:fur/lib/struct
 * @inner
 * @constructor TextElmStruct
 */

"use strict";

/** @lends TextElmStruct */
function TextElmStruct(values) {
    var s = this;
    s.set(values || {});
}

TextElmStruct.prototype = {

    // --- Properties ---

    /** Value of domainBaseline */
    _domainBaseline: undefined,
    /** Value of fill */
    _fill: undefined,
    /** Value of fontSize */
    _fontSize: undefined,
    /** Value of text */
    _text: undefined,
    /** Value of textAnchor */
    _textAnchor: undefined,
    /** Value of x */
    _x: undefined,
    /** Value of y */
    _y: undefined,

    // --- Accessors ---

    /**
     * Get values.
     * @returns {object} values.
     */
    get: function () {
        var s = this;
        return {
            domainBaseline: s.domainBaseline(),
            fill: s.fill(),
            fontSize: s.fontSize(),
            text: s.text(),
            textAnchor: s.textAnchor(),
            x: s.x(),
            y: s.y()
        }
    },
    /**
     * Set values.
     * @param data - Data to set.
     * @returns Self.
     */
    set: function (data) {
        var s = this;
        s.domainBaseline(data.domainBaseline);
        s.fill(data.fill);
        s.fontSize(data.fontSize);
        s.text(data.text);
        s.textAnchor(data.textAnchor);
        s.x(data.x);
        s.y(data.y);
        return s;
    },
    /**
     * Get domainBaseline value.
     * @function module:fur/lib/struct~TextElmStruct.prototype.domainBaseline
     * @returns Value of domainBaseline.
     */
    /**
     * Set domainBaseline value.
     * @function module:fur/lib/struct~TextElmStruct.prototype.domainBaseline
     * @param domainBaseline - Value to set.
     * @returns Self.
     */
    domainBaseline: function (domainBaseline) {
        var s = this;
        if (arguments.length === 0) {
            return s._domainBaseline;
        }
        s._domainBaseline = domainBaseline;
        return s;
    },
    /**
     * Get fill value.
     * @function module:fur/lib/struct~TextElmStruct.prototype.fill
     * @returns Value of fill.
     */
    /**
     * Set fill value.
     * @function module:fur/lib/struct~TextElmStruct.prototype.fill
     * @param fill - Value to set.
     * @returns Self.
     */
    fill: function (fill) {
        var s = this;
        if (arguments.length === 0) {
            return s._fill;
        }
        s._fill = fill;
        return s;
    },
    /**
     * Get fontSize value.
     * @function module:fur/lib/struct~TextElmStruct.prototype.fontSize
     * @returns Value of fontSize.
     */
    /**
     * Set fontSize value.
     * @function module:fur/lib/struct~TextElmStruct.prototype.fontSize
     * @param fontSize - Value to set.
     * @returns Self.
     */
    fontSize: function (fontSize) {
        var s = this;
        if (arguments.length === 0) {
            return s._fontSize;
        }
        s._fontSize = fontSize;
        return s;
    },
    /**
     * Get text value.
     * @function module:fur/lib/struct~TextElmStruct.prototype.text
     * @returns Value of text.
     */
    /**
     * Set text value.
     * @function module:fur/lib/struct~TextElmStruct.prototype.text
     * @param text - Value to set.
     * @returns Self.
     */
    text: function (text) {
        var s = this;
        if (arguments.length === 0) {
            return s._text;
        }
        s._text = text;
        return s;
    },
    /**
     * Get textAnchor value.
     * @function module:fur/lib/struct~TextElmStruct.prototype.textAnchor
     * @returns Value of textAnchor.
     */
    /**
     * Set textAnchor value.
     * @function module:fur/lib/struct~TextElmStruct.prototype.textAnchor
     * @param textAnchor - Value to set.
     * @returns Self.
     */
    textAnchor: function (textAnchor) {
        var s = this;
        if (arguments.length === 0) {
            return s._textAnchor;
        }
        s._textAnchor = textAnchor;
        return s;
    },
    /**
     * Get x value.
     * @function module:fur/lib/struct~TextElmStruct.prototype.x
     * @returns Value of x.
     */
    /**
     * Set x value.
     * @function module:fur/lib/struct~TextElmStruct.prototype.x
     * @param x - Value to set.
     * @returns Self.
     */
    x: function (x) {
        var s = this;
        if (arguments.length === 0) {
            return s._x;
        }
        s._x = x;
        return s;
    },
    /**
     * Get y value.
     * @function module:fur/lib/struct~TextElmStruct.prototype.y
     * @returns Value of y.
     */
    /**
     * Set y value.
     * @function module:fur/lib/struct~TextElmStruct.prototype.y
     * @param y - Value to set.
     * @returns Self.
     */
    y: function (y) {
        var s = this;
        if (arguments.length === 0) {
            return s._y;
        }
        s._y = y;
        return s;
    },

    // --- Meta ---

    $keys:['domainBaseline', 'fill', 'fontSize', 'text', 'textAnchor', 'x', 'y']
};

module.exports = TextElmStruct;