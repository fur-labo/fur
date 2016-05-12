/**
 * SVG data for font style.
 * @memberof module:fur/lib/element
 * @function fontStyleElm
 * @param {string} - Font theme string.
 * @returns {object} - SVG element data.
 */

'use strict'

const util = require('util'),
  os = require('os')

const furFonts = require('fur-fonts')

/** @lends fontStyleElm */
function fontStyleElm (theme) {
  let font = furFonts[ theme ]
  if (!font) {
    throw new Error(`Unknown theme: ${theme}`)
  }
  let url = [
    'data:application/x-font-ttf;base64',
    font().toString('base64')
  ].join(',')
  let name = 'fur-font-' + theme
  return {
    '#': [
      util.format('@font-face {font-family: "%s";src: url("%s")}', name, url),
      util.format('text{font-family: "%s";}', name)
    ].join(os.EOL)
  }
}

module.exports = fontStyleElm
