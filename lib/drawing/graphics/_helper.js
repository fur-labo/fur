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
        borderWidth / 2, borderWidth / 2,
        width - (borderWidth ),
        height - (borderWidth ),
        extend({
            fill: 'none',
            'stroke-width': borderWidth
        }, options)
    );
};

h.gridRect = function (row, col, width, height, options) {
    var x = col * width,
        y = row * height;
    return h.rect(x, y, width, height, options);
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