/**
 * Helper functions for graphics.
 * @module fur/lib/drawing/graphics
 * @private
 */
"use strict";

var extend = require('extend');

var h = {};

h.rect = function (x, y, width, height, options) {
    return {
        '@': extend({}, {
            x: x,
            y: y,
            width: width,
            height: height
        }, options || {})
    }
};

h.bgRect = function (width, height, options) {
    return h.rect(0, 0, width, height, options);
};
h.borderRect = function (width, height, borderWidth, options) {
    return h.rect(
        borderWidth, borderWidth,
        width - (borderWidth * 2),
        height - (borderWidth * 2),
        extend({
            fill: 'none',
            'stroke-width': borderWidth
        }, options)
    );
};


h.centerText = function (x, y, text, options) {
    return {
        '@': extend({
            x: x,
            y: y
        }, {
            'dominant-baseline': 'central',
            'text-anchor': "middle"
        }, options),
        '#': text
    }
};

module.exports = h;