/**
 * A fur context.
 * @memberof module:fur/lib
 * @inner
 * @constructor Fur
 */

"use strict";

var argx = require('argx'),
    extend = require('extend'),
    async = require('async'),
    furLogger = require('fur-logger'),
    BannerGenerator = require('./generators/banner_generator'),
    FaviconGenerator = require('./generators/favicon_generator');


/** @lends Fur **/
function Fur(config) {
    var s = this;
    extend(s, config);
}

Fur.prototype = {
    /**
     * Generate banner
     * @param {string} filename - Filename to generate
     * @param {object} options - Optional settings.
     * @param {function} callback - Callback when done.
     */
    banner: function (filename, options, callback) {
        var args = argx(arguments);
        callback = args.pop('function') || argx.noop;
        filename = args.shift('string');
        options = args.pop('object') || {};

        var logger = furLogger(options.verbose);
        var generator = new BannerGenerator({
            width: options.width,
            height: options.height,
            shape: options.shape,
            color: options.color,
            font: options.font,
            text: options.text,
            format: options.format,
            fontSize: options.fontSize
        });
        async.series([
            function (callback) {
                generator.generate(filename, callback);
            },
            function (callback) {
                logger.logImageGenerated(filename);
                callback(null);
            }
        ], callback);
    },
    /**
     * Generate favicon
     * @param {string} filename - Filename to generate
     * @param {object} options - Optional settings.
     * @param {function} callback - Callback when done.
     */
    favicon: function (filename, options, callback) {
        var args = argx(arguments);
        callback = args.pop('function') || argx.noop;
        filename = args.shift('string');
        options = args.pop('object') || {};

        var logger = furLogger(options.verbose);

        var generator = new FaviconGenerator({
            size: options.size,
            shape: options.shape,
            color: options.color,
            font: options.font,
            text: options.text,
            format: options.format,
            fontSize: options.fontSize
        });
        async.series([
            function (callback) {
                generator.generate(filename, callback);
            },
            function (callback) {
                logger.logImageGenerated(filename);
                callback(null);
            }
        ], callback);
    }
};
module.exports = Fur;
