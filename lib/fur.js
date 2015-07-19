/**
 * @memberof module:fur/lib
 * @inner
 * @constructor Fur
 */

"use strict";

var argx = require('argx'),
    async = require('async'),
    colorprint = require('colorprint'),
    convertSvgFile = require('./generating/convert_svg_file'),
    path = require('path'),
    writeoutSvg = require('./generating/writeout_svg'),
    drawBanner = require('./drawing/draw_banner'),
    ColorThemeResolver = require('./theming/color_theme_resolver'),
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
                        s._writeoutImage(filename, data, options.format, callback);
                    }
                ], callback);
            }
        ], callback);
    },
    _writeoutImage: function (filename, svgData, format, callback) {
        var s = this;
        var workFilename = filename + '.svg.tmp.' + new Date().getTime();
        async.series([
            function (callback) {
                writeoutSvg(workFilename, svgData, callback);
            },
            function (callback) {
                convertSvgFile(workFilename, filename, {
                    format: format || 'svg',
                    clean: true
                }, callback);
            },
            function (callback) {
                s._logFileGenerated(filename);
                callback(null);
            }
        ], callback);
    },
    _logFileGenerated: function (filename) {
        colorprint.debug('File generated: ' + path.relative(process.cwd(), filename));
    }
};

module.exports = Fur;
