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


var tmplSrc = String(fs.readFileSync(path.resolve(__dirname, '_style_with_font.hbs'))),
    tmpl = handlebars.compile(tmplSrc);

/** @lends styleWithFont */
function styleWithFont(src, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || args.noop;
    options = args.pop('object') || {};
    src = args.shift();

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
            console.log(style);
            callback(null, style);
        }
    ], callback);
}

module.exports = styleWithFont;