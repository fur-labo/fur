'use strict'

/**
 * SVG data for text.
 * @memberof module:fur/lib/element
 * @function textElm
 * @param {number} cx - Center x.
 * @param {number} cy - Center y.
 * @param {string} text - Text string.
 * @param {number} fontSize - Size of font.
 * @returns {object} - SVG element data
 */
function textElm (cx, cy, text, fontSize) {
  return {
    '@': {
      x: cx,
      y: fontSize,
      'text-anchor': 'middle',
      'font-size': fontSize,
      'stroke': 'none'
    },
    '#': text
  }
}

module.exports = textElm
