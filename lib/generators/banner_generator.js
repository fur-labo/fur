/**
 * Generator for banner.
 * @augment Generator
 * @constructor BannerGenerator
 */

'use strict'

const Generator = require('./generator')
const textElm = require('../element/text_elm')
const svgAttr = require('../element/svg_attr')
const colorAttr = require('../element/color_attr')
const shapeElm = require('../element/shape_elm')
const path = require('path')
const stringcase = require('stringcase')
const co = require('co')
const fontStyleElm = require('../element/font_style_elm')

/** @lends BannerGenerator */
module.exports = Generator.define({
  width: 768,
  height: 256,
  shape: 'c',
  color: 'br',
  font: 'n',
  text: 'sample',
  fontSize: null,
  svgData (id) {
    const s = this

    let w = s.width
    let h = s.height
    let shape = s.shape
    let font = s.font
    let color = s.color
    let fontSize = s.fontSize || h * 0.75

    return {
      '@': svgAttr(id, w, h),
      style: fontStyleElm(font),
      g: [
        {
          svg: shapeElm(shape, w, h, color)
        },
        {
          '@': colorAttr(color, shapeElm.isReversed(shape)),
          text: textElm(w / 2, h / 2, s.text, fontSize)
        }
      ]
    }
  },
  generate (filename) {
    const s = this
    let basename = path.basename(filename, path.extname(filename))
    let id = 'fur-banner-' + stringcase.spinalcase(basename)
    let data = s.svgData(id)
    return co(function * () {
      return yield s.render(filename, s.format, data)
    })
  }
})
