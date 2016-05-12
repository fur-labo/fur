/**
 * A fur context.
 * @memberof module:fur/lib
 * @inner
 * @constructor Fur
 */

'use strict'

const argx = require('argx')
const co = require('co')
const furLogger = require('fur-logger')
const BannerGenerator = require('./generators/banner_generator')
const FaviconGenerator = require('./generators/favicon_generator')

let noMoreCallbackError = () => new Error('Callback is no longer supported. Use promise interface instead.')

/** @lends Fur **/
function Fur (config) {
  const s = this;
  Object.assign(s, config)
}

Fur.prototype = {
  /**
   * Generate banner
   * @param {string} filename - Filename to generate
   * @param {object} options - Optional settings.
   * @returns {Promise}
   */
  banner (filename, options) {
    let args = argx(arguments)
    if (args.pop('function')) {
      throw noMoreCallbackError()
    }
    filename = args.shift('string')
    options = args.pop('object') || {}

    let logger = furLogger(options.verbose)
    let generator = new BannerGenerator({
      width: options.width,
      height: options.height,
      shape: options.shape,
      color: options.color,
      font: options.font,
      text: options.text,
      format: options.format,
      fontSize: options.fontSize
    })
    return co(function * () {
      yield generator.generate(filename)
      logger.logImageGenerated(filename)
    })
  },
  /**
   * Generate favicon
   * @param {string} filename - Filename to generate
   * @param {object} options - Optional settings.
   * @returns {Promise}
   */
  favicon (filename, options) {
    let args = argx(arguments)
    if (args.pop('function')) {
      throw noMoreCallbackError()
    }
    filename = args.shift('string')
    options = args.pop('object') || {}

    let logger = furLogger(options.verbose)
    let generator = new FaviconGenerator({
      size: options.size,
      shape: options.shape,
      color: options.color,
      font: options.font,
      text: options.text,
      format: options.format,
      fontSize: options.fontSize
    })
    return co(function * () {
      yield generator.generate(filename)
      logger.logImageGenerated(filename)
    })
  }
}

module.exports = Fur
