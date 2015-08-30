/**
 * Define shape elm.
 * @memberof module:fur/lib/element
 * @function shapeElm
 * @param {string} theme - Shape theme.
 * @param {number} width - Shape width
 * @param {number} height - Shape height
 * @param {string} color - Color theme.
 * @returns {object} - SVG element data.
 */

"use strict";

var furShapes = require('fur-shapes'),
    colorAttr = require('./color_attr');

/** @lends shapeElm */
function shapeElm(theme, width, height, colorTheme) {
    var shape = furShapes[theme];
    if (!shape) {
        throw new Error('Unknown theme: ' + theme);
    }
    var colors = colorAttr(colorTheme);
    var revesed = shape.$reversed;
    var color1 = colors[revesed ? 'stroke' : 'fill'],
        color2 = colors[revesed ? 'fill' : 'stroke'];
    return shape(width, height, color1, color2);
}

module.exports = shapeElm;
