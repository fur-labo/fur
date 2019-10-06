'use strict'

const Generator = require('./generator')
const textElm = require('../element/text_elm')
const svgAttr = require('../element/svg_attr')
const colorAttr = require('../element/color_attr')
const shapeElm = require('../element/shape_elm')
const path = require('path')
const stringcase = require('stringcase')

const fontStyleElm = require('../element/font_style_elm')

/**
 * Generator for banner.
 * @augment Generator
 * @constructor BannerGenerator
 */
module.exports = Generator.define({
  width: 768,
  height: 256,
  shape: 'c',
  color: 'br',
  font: 'n',
  text: 'sample',
  fontSize: null,
  svgData (id) {
    let w = this.width
    let h = this.height
    let shape = this.shape
    let font = this.font
    let color = this.color
    let fontSize = this.fontSize || h * 0.75

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
    let id = 'fur-banner-' + stringcase.spinalcase(basename)
    let data = this.svgData(id)
    return await this.render(filename, this.format, data)
  }
})
