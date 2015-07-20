/**
 * A fur context.
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
    FaviconGraphic = require('./drawing/graphics/favicon_graphic'),
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
    _nameSvg: function (filename) {
        return stringcase.spinalcase(path.basename(filename, path.extname(filename)));
    },
    /**
     * Generate a banner.
     * @param {string} filename - Filename to generate.
     * @param {object} [options] - Optional settings.
     * @param {string} [options.color] - Color expression string or color theme name.
     * @param {string} [options.font] - Font file name or font theme name.
     * @param {string} [options.format='svg'] - File format.
     * @param {number} [options.width=256] - Banner width.
     * @param {number} [options.height=128] - Banner height.
     * @param {string} [options.text] - Text to write.
     * @param {string} [options.style="default"] - Banner style.
     * @param {number} [options.fontsize=height] - Size of font.
     * @param {function} callback - Callback when done.
     * @example
     *  new Fur().banner('my-banner.svg', {
     *      color: 'a',
     *      font: 'c',
     *      format: 'svg'
     *  }, function (err) {
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

        var name = s._nameSvg(filename),
            height = options.height || 128,
            width = options.width || height * (String(text).length / 2 + 0.5),
            fontSize = options.fontsize || height * 0.8,
            text = options.text || name;

        var xml = new BannerGraphic({})
            .name(name)
            .font(s.fontTheme[options.font] || options.font)
            .style(options.style || 'default')
            .color(s.colorTheme[options.color] || options.color || s.colorTheme.a)
            .text(text)
            .size({
                width: width,
                height: height
            })
            .fontSize(fontSize)
            .toSvgXml();

        async.waterfall([
            function (callback) {
                generator.writeoutImage(filename, xml, {
                    format: options.format,
                    width: width,
                    height: height
                }, callback);
            },
            function (result, callback) {
                if (!result.skipped) {
                    logger.logImageGenerated(filename);
                }
                callback(null);
            }
        ], callback);
    },
    /**
     * Generate a favicon.
     * @param {string} filename - Filename to generate.
     * @param {object} [options] - Optional settings.
     * @param {string} [options.color] - Color expression string or color theme name.
     * @param {string} [options.font] - Font file name or font theme name.
     * @param {string} [options.format='svg'] - File format.
     * @param {number} [options.size=256] - Banner size.
     * @param {string} [options.text] - Text to write.
     * @param {string} [options.style="default"] - Banner style.
     * @param {number} [options.fontsize=size] - Size of font.
     * @param {function} callback - Callback when done.
     * @example
     *  new Fur().favicon('my-favicon.png', {
     *      format: 'png',
     *      font: 'b',
     *      color: 'c'
     *  }, function (err) {
     *
     *  });
     */
    favicon: function (filename, options, callback) {
        var args = argx(arguments);
        callback = args.pop('function') || argx.noop;
        options = args.pop('object') || {};
        filename = args.shift();

        var s = this;
        var logger = new FurLogger(),
            generator = new ImageGenerator();

        var name = s._nameSvg(filename),
            size = options.size || 128,
            fontSize = options.fontsize || size * 0.8,
            text = options.text || name;

        var xml = new FaviconGraphic({})
            .name(name)
            .font(s.fontTheme[options.font] || options.font)
            .style(options.style || 'default')
            .color(s.colorTheme[options.color] || options.color || s.colorTheme.a)
            .text(text)
            .size({
                width: size,
                height: size
            })
            .fontSize(fontSize)
            .toSvgXml();

        async.waterfall([
            function (callback) {
                generator.writeoutImage(filename, xml, {
                    format: options.format,
                    width: size,
                    height: size
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
