/**
 * Abstract Generator
 * @abstract
 * @memberof module:fur/lib
 * @constructor Generator
 */

'use strict'

const fs = require('fs')
const co = require('co')
const path = require('path')
const svgpng = require('svgpng')
const writexml = require('writexml')
const FurLogger = require('fur-logger')

function unlinkSync (filename) {
  let exists = fs.existsSync(filename)
  if (exists) {
    fs.unlinkSync(filename)
  }
}

/** @lens Generator */
function Generator () {
  const s = this
  s.init.apply(s, arguments)
}

Generator.prototype = {
  /**
   * Initialize Generator.
   * @param {object} config - Generator config.
   */
  init (config) {
    const s = this
    for (let name of Object.keys(config)) {
      if (typeof config[ name ] === 'undefined') {
        delete config[ name ]
      }
    }
    Object.assign(s, config)
  },
  logger: new FurLogger(),
  /**
   * Render a svg file.
   * @param {string} filename - Filename to render.
   * @param {object} data - SVG data.
   * @returns {Promise}
   */
  renderSvg (filename, data) {
    const s = this
    return co(function * () {
      yield writexml(filename, 'svg', data)
    })
  },
  /**
   * Render a png file.
   * @param {string} filename - Filename to render.
   * @param {object} svgData - SVG data.
   * @returns {Promise}
   */
  renderPng (filename, svgData) {
    let s = this
    let destDir = path.dirname(filename)
    let basename = path.basename(filename)

    let svgAttr = svgData[ '@' ] || {}
    let width = Number(svgAttr[ 'width' ] || 256)
    let height = Number(svgAttr[ 'height' ] || 256)

    let tmpFile = path.resolve(destDir, '.tmp.' + basename + '.' + new Date().getTime() + '.svg')

    return co(function * () {
      try {
        yield s.renderSvg(tmpFile, svgData)
        yield svgpng(tmpFile, filename, {
          size: {
            width, height
          },
          silent: false
        })
        unlinkSync(tmpFile)
      } catch (err) {
        unlinkSync(tmpFile)
        throw err
      }
    })
  },
  render (filename, format, svgData) {
    const s = this
    return co(function * () {
      format = format || path.extname(filename).replace(/^\./, '')
      switch (format) {
        case 'png':
          yield s.renderPng(filename, svgData)
          break
        case 'svg':
          yield s.renderSvg(filename, svgData)
          break
        default:
          throw new Error('Unknown format: ' + format)
      }
    })
  }
}

Generator.define = function (properties) {
  function Defined () {
    const s = this
    s.init.apply(s, arguments)
  }

  Defined.prototype = Object.assign(new Generator(properties), properties)
  return Defined
}

module.exports = Generator
