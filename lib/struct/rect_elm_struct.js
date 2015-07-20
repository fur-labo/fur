/**
 * String forrect elm
 * @memberof module:fur/lib/struct
 * @inner
 * @constructor RectElmStruct
 */

"use strict";

/** @lends RectElmStruct */
function RectElmStruct(values) {
    var s = this;
    s.set(values || {});
}

RectElmStruct.prototype = {

    // --- Properties ---

    /** Value of x */
    _x: undefined,
    /** Value of y */
    _y: undefined,
    /** Value of width */
    _width: undefined,
    /** Value of height */
    _height: undefined,
    /** Value of fill */
    _fill: undefined,

    // --- Accessors ---

    /**
     * Get values.
     * @returns {object} values.
     */
    get: function () {
        var s = this;
        return {
            x: s.x(),
            y: s.y(),
            width: s.width(),
            height: s.height(),
            fill: s.fill()
        }
    },
    /**
     * Set values.
     * @param data - Data to set.
     * @returns Self.
     */
    set: function (data) {
        var s = this;
        s.x(data.x);
        s.y(data.y);
        s.width(data.width);
        s.height(data.height);
        s.fill(data.fill);
        return s;
    },
    /**
     * Get x value.
     * @function module:fur/lib/struct~RectElmStruct.prototype.x
     * @returns Value of x.
     */
    /**
     * Set x value.
     * @function module:fur/lib/struct~RectElmStruct.prototype.x
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
     * @function module:fur/lib/struct~RectElmStruct.prototype.y
     * @returns Value of y.
     */
    /**
     * Set y value.
     * @function module:fur/lib/struct~RectElmStruct.prototype.y
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
    /**
     * Get width value.
     * @function module:fur/lib/struct~RectElmStruct.prototype.width
     * @returns Value of width.
     */
    /**
     * Set width value.
     * @function module:fur/lib/struct~RectElmStruct.prototype.width
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
     * @function module:fur/lib/struct~RectElmStruct.prototype.height
     * @returns Value of height.
     */
    /**
     * Set height value.
     * @function module:fur/lib/struct~RectElmStruct.prototype.height
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
    /**
     * Get fill value.
     * @function module:fur/lib/struct~RectElmStruct.prototype.fill
     * @returns Value of fill.
     */
    /**
     * Set fill value.
     * @function module:fur/lib/struct~RectElmStruct.prototype.fill
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

    // --- Meta ---

    $keys:['x', 'y', 'width', 'height', 'fill']
};

module.exports = RectElmStruct;