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


h.centerText = function (x, y, text, options) {
    return {
        '@': extend({
            x: x,
            y: y
        }, {
            'dominant-baseline': 'middle',
            'text-anchor': "middle"
        }, options),
        '#': text
    }
};

module.exports = h;