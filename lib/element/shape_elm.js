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

'use strict'

const furShapes = require('fur-shapes')
const colorAttr = require('./color_attr')

/** @lends shapeElm */
function shapeElm (theme, width, height, colorTheme) {
  let shape = furShapes[ theme ]
  if (!shape) {
    throw new Error('Unknown theme: ' + theme)
  }
  var colors = colorAttr(colorTheme)
  return shape(width, height, colors[ 'stroke' ], colors[ 'fill' ])
}

shapeElm.isReversed = function isReversed (theme) {
  return furShapes[ theme ][ '$reversed' ]
}
module.exports = shapeElm
