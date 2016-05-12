/**
 * Define color attr data.
 * @memberof module:fur/lib/element
 * @function colorAttr
 * @param {string} theme - Color theme name or color expression.
 * @param {boolean} [reversed=false] - Reversed or not.
 * @returns {object} - SVG element data.
 */

'use strict'

const furColor = require('fur-colors')
const h = require('fur-colors/helper')

function _colors (theme) {
  let color = furColor[ theme ]
  if (color) {
    return color()
  }
  let isValid = h.isColor(theme)
  if (isValid) {
    return h.scheme(theme)
  }
  throw new Error('Invalid theme: ' + theme)
}

/** @lends colorAttr */
function colorAttr (theme, reversed) {
  let colors = _colors(theme)
  let main = colors[ reversed ? 1 : 0 ]
  let background = colors[ reversed ? 0 : 1 ]
  return {
    stroke: main,
    fill: background
  }
}

module.exports = colorAttr
