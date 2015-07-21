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
    IdenticonGraphic = require('./drawing/graphics/identicon_graphic'),
    hashCode = require('./util/hash/hash_code'),
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
    _generateImage: function (filename, svgXml, options, callback) {
        var s = this,
            logger = new FurLogger(),
            generator = new ImageGenerator();

        async.waterfall([
            function (callback) {
                generator.writeoutImage(filename, svgXml, options, callback);
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
     * Generate a banner.
     * @param {string} filename - Filename to generate.
     * @param {object} [options] - Optional settings.
     * @param {string} [options.color] - Color expression string or color theme name.
     * @param {number} [options.height=128] - Banner height.
     * @param {string} [options.font] - Font file name or font theme name.
     * @param {number} [options.fontsize=height] - Size of font.
     * @param {string} [options.format='svg'] - File format.
     * @param {string} [options.style="default"] - Banner style.
     * @param {string} [options.text] - Text to write.
     * @param {number} [options.width=256] - Banner width.
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

        var name = s._nameSvg(filename),
            text = options.text || name,
            height = options.height || 128,
            width = options.width || ((height / 2) * (String(text).length + 1)),
            fontSize = options.fontsize || height * 0.8;

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

        s._generateImage(filename, xml, {
            format: options.format,
            width: width,
            height: height
        }, callback);
    },
    /**
     * Generate a favicon.
     * @param {string} filename - Filename to generate.
     * @param {object} [options] - Optional settings.
     * @param {string} [options.color] - Color expression string or color theme name.
     * @param {string} [options.font] - Font file name or font theme name.
     * @param {number} [options.fontsize=size] - Size of font.
     * @param {string} [options.format='svg'] - File format.
     * @param {number} [options.size=256] - Favicon size.
     * @param {string} [options.style="default"] - Favicon style.
     * @param {string} [options.text] - Text to write.
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

        s._generateImage(filename, xml, {
            format: options.format,
            width: size,
            height: size
        }, callback);


    },
    /**
     * Generate an identicon.
     * @param {string} filename - Filename to generate.
     * @param {object} options - Optional settings.
     * @param {string} [options.format='svg'] - File format.
     * @param {string} [options.identifier] - Identifier for identicon.
     * @param {function} callback - Callback when done.
     */
    identicon: function (filename, options, callback) {
        var args = argx(arguments);
        callback = args.pop('function') || argx.noop;
        options = args.pop('object') || {};
        filename = args.shift();

        var s = this;

        var name = s._nameSvg(filename),
            size = options.size || 128;

        var identifier = options.identifier;
        if (!identifier) {
            callback(new Error('options.identifier is required.'));
            return;
        }

        var hash = hashCode(String(options.identifier));

        var color = s.colorTheme.getByIndex(hash);

        var xml = new IdenticonGraphic({})
            .name(name)
            .color(color)
            .hash(hash)
            .size({width: size, height: size})
            .toSvgXml();
        s._generateImage(filename, xml, {
            format: options.format,
            width: size,
            height: size
        }, callback);
    }
};

module.exports = Fur;
