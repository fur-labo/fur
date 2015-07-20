/**
 * Get style string with font file.
 * @memberof fur:lib/styling
 * @function styleWithFont
 * @param {string} src - Source font file name.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.selector='text'] - Selectors to apply.
 * @param {string} [options.format] - Font format.
 * @param {function} callback - Callback when done.
 */

"use strict";

var async = require('async'),
    fs = require('fs'),
    path = require('path'),
    handlebars = require('handlebars'),
    argx = require('argx');

var compileHbsSrc = require('../compiling/compile_hbs_src');

var tmpl = compileHbsSrc(path.resolve(__dirname, 'hbs/style_with_font.hbs'))

/** @lends styleWithFont */
function styleWithFont(src, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || args.noop;
    options = args.pop('object') || {};
    src = args.shift();

    if (!src) {
        callback(null, null);
        return;
    }

    async.waterfall([
        function (callback) {
            fs.readFile(src, callback);
        },
        function (font, callback) {
            var style = tmpl({
                url: 'data:application/x-font-ttf;base64,' + font.toString('base64'),
                name: path.basename(src, path.extname(src)),
                format: options.format,
                selector: options.selector || 'text'
            });
            callback(null, style);
        }
    ], callback);
}

module.exports = styleWithFont;