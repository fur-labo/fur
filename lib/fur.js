/**
 * @memberof module:fur/lib
 * @inner
 * @constructor Fur
 */

"use strict";

var argx = require('argx'),
    async = require('async'),
    path = require('path'),
    drawBanner = require('./drawing/draw_banner'),
    ColorThemeResolver = require('./theming/color_theme_resolver'),
    FurLogger = require('./logging/fur_logger'),
    ImageGenerator = require('./generating/image_generator'),
    FontThemeResolver = require('./theming/font_theme_resolver'),
    FontStruct = require('./struct/font_struct'),
    SizeStruct = require('./struct/size_struct');

/** @lends Fur **/
function Fur() {
    var s = this;
    s.colorThemeResolver = new ColorThemeResolver({});
    s.fontThemeResolver = new FontThemeResolver({});
}

Fur.prototype = {
    /**
     * Create a banner.
     * @param {string} filename - Filename to generate.
     * @param {object} [options] - Optional settings.
     * @param {string} [options.colorTheme] - Color theme.
     * @param {string} [options.colorVariation='default'] - Color variation.
     * @param {string} [options.fontTheme] - Font theme.
     * @param {string} [options.format='svg'] - File format.
     * @param {number} [options.width=256] - Banner width.
     * @param {number} [options.height=128] - Banner height.
     * @param {string} [options.text] - Text to write.
     * @param {string} [options.subText] - Sub text to write.
     * @param {string} [options.fontSize=height * 0.75] - Size of font.
     * @param {string} [options.style="default"] - Banner style.
     * @param {function} callback - Callback when done.
     * @example
     *  new Fur().banner('my-banner.svg', {
     *      colorTheme: 'a',
     *      fontTheme: 'c'
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

        var colorTheme = s.colorThemeResolver.resolve(options.colorTheme || 'a'),
            colorVariation = options.colorVariation || 'default',
            fontTheme = s.fontThemeResolver.resolve(options.fontTheme || 'a'),
            text = options.text || path.basename(filename, path.extname(filename)),
            style = options.style || 'default';

        var size = new SizeStruct({
            width: options.width || 256,
            height: options.height || 128
        });

        var font = new FontStruct({
            size: options.fontSize || (size.height() * 0.75),
            src: fontTheme.src
        });

        async.series([
            function (callback) {
                async.waterfall([
                    function (callback) {
                        drawBanner({
                            colors: colorTheme[colorVariation],
                            font: font,
                            text: text,
                            size: size,
                            style: style
                        }, callback);
                    },
                    function (data, callback) {
                        var js2xml = require('js2xmlparser'),
                            stringcase = require('stringcase'),
                            path = require('path'),
                            extend = require('extend');

                        var svg = extend(data, {});
                        var name = stringcase.spinalcase(path.basename(filename, path.extname(filename)));
                        svg['@'] = extend({
                            id: ['svg', name].join('-'),
                            xmlns: "http://www.w3.org/2000/svg"
                        }, svg['@'], {});

                        var xml = js2xml('svg', svg, {
                            useCDATA: true
                        });


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
        ], callback);
    }
};

module.exports = Fur;
