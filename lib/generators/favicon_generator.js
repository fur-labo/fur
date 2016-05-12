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
const co = require('co')
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
    const s = this

    let w = s.size
    let h = s.size
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
    let id = 'fur-favicon-' + stringcase.spinalcase(basename)
    let data = s.svgData(id)
    return co(function * () {
      return yield s.render(filename, s.format, data)
    })
  }
})
