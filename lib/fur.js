/**
 * @memberof module:fur/lib
 * @inner
 * @constructor Fur
 */

"use strict";

var argx = require('argx'),
    async = require('async'),
    stringcase = require('stringcase'),
    extend = require('extend'),
    path = require('path'),
    BannerGraphic = require('./drawing/graphics/banner_graphic'),
    ColorTheme = require('./theming/color_theme'),
    FurLogger = require('./logging/fur_logger'),
    ImageGenerator = require('./generating/image_generator'),
    FontTheme = require('./theming/font_theme');


/** @lends Fur **/
function Fur() {
    var s = this;
    s.colorTheme = new ColorTheme({});
    s.fontTheme = new FontTheme({});
}

Fur.prototype = {
    /**
     * Create a banner.
     * @param {string} filename - Filename to generate.
     * @param {object} [options] - Optional settings.
     * @param {string} [options.color] - Color expression string or color theme name.
     * @param {string} [options.font] - Font file name or font theme name.
     * @param {string} [options.format='svg'] - File format.
     * @param {number} [options.width=256] - Banner width.
     * @param {number} [options.height=128] - Banner height.
     * @param {string} [options.text] - Text to write.
     * @param {string} [options.style="default"] - Banner style.
     * @param {number} [options.fontSize=height] - Size of font.
     * @param {function} callback - Callback when done.
     * @example
     *  new Fur().banner('my-banner.svg', {
     *      color: 'a',
     *      font: 'c',
     *      format: 'svg'
     *  }, function(err) {
     *
     *  });
     */
    banner: function (filename, options, callback) {
        var args = argx(arguments);
        callback = args.pop('function') || argx.noop;
        options = args.pop('object') || {};
        filename = args.shift();
        var s = this;

        var logger = new FurLogger(),
            generator = new ImageGenerator();


        var name = stringcase.spinalcase(path.basename(filename, path.extname(filename))),
            height = options.height || 128;
        var xml = new BannerGraphic({})
            .name(name)
            .font(s.fontTheme[options.font] || options.font)
            .style(options.style || 'default')
            .color(s.colorTheme[options.color] || options.color || s.colorTheme.a)
            .text(options.text)
            .size({width: options.width || 256, height: height})
            .fontSize(options.fontSize || height)
            .toSvgXml();

        async.waterfall([
            function (callback) {
                generator.writeoutImage(filename, xml, {
                    format: options.format
                }, callback);
            },
            function (result, callback) {
                if (!result.skipped) {
                    logger.logImageGenerated(filename);
                }
                callback(null);
            }
        ], callback);
    }
};

module.exports = Fur;
