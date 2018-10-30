/**
 * Generator for favicon.
 * @augment Generator
 * @constructor FaviconGenerator
 */

'use strict'

const Generator = require('./generator')
const textElm = require('../element/text_elm')
const svgAttr = require('../element/svg_attr')
const colorAttr = require('../element/color_attr')
const shapeElm = require('../element/shape_elm')
const path = require('path')

const stringcase = require('stringcase')
const fontStyleElm = require('../element/font_style_elm')

/** @lends FaviconGenerator */
module.exports = Generator.define({
  size: 256,
  shape: 'e',
  color: 'j',
  font: 'k',
  text: 'smpl',
  fontSize: null,
  svgData (id) {
    const w = this.size
    const h = this.size
    const shape = this.shape
    const font = this.font
    const color = this.color
    const fontSize = this.fontSize || h * 0.75

    return {
      '@': svgAttr(id, w, h),
      style: fontStyleElm(font),
      g: [
        {
          svg: shapeElm(shape, w, h, color)
        },
        {
          '@': colorAttr(color, shapeElm.isReversed(shape)),
          text: textElm(w / 2, h / 2, this.text, fontSize)
        }
      ]
    }
  },
  async generate (filename) {
    let basename = path.basename(filename, path.extname(filename))
    let id = 'fur-favicon-' + stringcase.spinalcase(basename)
    let data = this.svgData(id)
    return await this.render(filename, this.format, data)
  }
})
