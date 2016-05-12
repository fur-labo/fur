/**
 * SVG data for font style.
 * @memberof module:fur/lib/element
 * @function fontStyleElm
 * @param {string} - Font theme string.
 * @returns {object} - SVG element data.
 */

'use strict'

const os = require('os')

const furFonts = require('fur-fonts')

/** @lends fontStyleElm */
function fontStyleElm (theme) {
  let font = furFonts[ theme ]
  if (!font) {
    throw new Error(`Unknown theme: ${theme}`)
  }
  let url = `data:application/x-font-ttf;charset=utf-8;base64,${font().toString('base64')}`
  let name = `fur-font-${theme}`
  return {
    '#': `
@font-face {font-family: "${name}";src: url("${url}")}
text{font-family: "${name}";}
`
  }
}

module.exports = fontStyleElm
