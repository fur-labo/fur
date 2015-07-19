/**
 * @memberof module:fur/lib
 * @inner
 * @constructor Fur
 */

"use strict";

var argx = require('argx'),
    async = require('async'),
    fs = require('fs'),
    colorprint = require('colorprint'),
    convertSvgFile = require('./generating/convert_svg_file'),
    path = require('path'),
    writeoutSvg = require('./generating/writeout_svg'),
    drawBanner = require('./drawing/draw_banner'),
    ColorThemeResolver = require('./theming/color_theme_resolver'),
    FontThemeResolver = require('./theming/font_theme_resolver');

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

        var workFilename = filename + '.svg.tmp.' + new Date().getTime();

        var colorTheme = s.colorThemeResolver.resolve(options.colorTheme || 'a'),
            colorVariation = options.colorVariation || 'default',
            fontTheme = s.fontThemeResolver.resolve(options.fontTheme || 'a'),
            text = options.text || path.basename(filename, path.extname(filename)),
            width = options.width || 256,
            height = options.height || 128,
            style = options.style || 'default',
            fontSize = options.fontSize || (height * 0.75);

        async.series([
            function (callback) {
                async.waterfall([
                    function (callback) {
                        drawBanner({
                            colors: colorTheme[colorVariation],
                            font: fontTheme.src,
                            text: text,
                            width: width,
                            height: height,
                            style: style,
                            fontSize: fontSize
                        }, callback);
                    },
                    function (data, callback) {
                        writeoutSvg(workFilename, data, function (err) {
                            callback(err);
                        });
                    }
                ], callback);
            },
            function (callback) {
                convertSvgFile(workFilename, filename, {
                    format: options.format || 'svg'
                }, callback);
            },
            function (callback) {
                fs.unlink(workFilename, callback);
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
