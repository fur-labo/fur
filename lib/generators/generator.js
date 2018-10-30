/**
 * Abstract Generator
 * @abstract
 * @memberof module:fur/lib
 * @constructor Generator
 */

'use strict'

const fs = require('fs')

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
  this.init.apply(this, arguments)
}

Generator.prototype = {
  /**
   * Initialize Generator.
   * @param {object} config - Generator config.
   */
  init (config) {
    for (let name of Object.keys(config)) {
      if (typeof config[name] === 'undefined') {
        delete config[name]
      }
    }
    Object.assign(this, config)
  },
  logger: new FurLogger(),
  /**
   * Render a svg file.
   * @param {string} filename - Filename to render.
   * @param {object} data - SVG data.
   * @returns {Promise}
   */
  async renderSvg (filename, data) {
    await writexml(filename, 'svg', data)
  },
  /**
   * Render a png file.
   * @param {string} filename - Filename to render.
   * @param {object} svgData - SVG data.
   * @returns {Promise}
   */
  async renderPng (filename, svgData) {
    const destDir = path.dirname(filename)
    const basename = path.basename(filename)

    let svgAttr = svgData['@'] || {}
    let width = Number(svgAttr['width'] || 256)
    let height = Number(svgAttr['height'] || 256)

    let tmpFile = path.resolve(destDir, '.tmp.' + basename + '.' + new Date().getTime() + '.svg')

    try {
      await this.renderSvg(tmpFile, svgData)
      await svgpng(tmpFile, filename, {
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
  },
  async render (filename, format, svgData) {
    format = format || path.extname(filename).replace(/^\./, '')
    switch (format) {
      case 'png':
        await this.renderPng(filename, svgData)
        break
      case 'svg':
        await this.renderSvg(filename, svgData)
        break
      default:
        throw new Error('Unknown format: ' + format)
    }
  }
}

Generator.define = function (properties) {
  function Defined () {
    this.init.apply(this, arguments)
  }

  Defined.prototype = Object.assign(new Generator(properties), properties)
  return Defined
}

module.exports = Generator
