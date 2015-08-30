/**
 * SVG data for text.
 * @memberof module:fur/lib/element
 * @function textElm
 * @param {number} x - Center x.
 * @param {number} y - Center y.
 * @param {string} text - Text string.
 * @param {number} fontSize - Size of font.
 * @returns {object} - SVG element data
 */

"use strict";


/** @lends textElm */
function textElm(x, y, text, fontSize) {
    return {
        '@': {
            x: x,
            y: y,
            'dominant-baseline': "central",
            'text-anchor': "middle",
            'font-size': fontSize,
            'stroke':'none'
        },
        '#': text
    }
}

module.exports = textElm;
