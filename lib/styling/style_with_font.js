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
var tmpl = compileHbsSrc(path.resolve(__dirname, 'hbs/style_with_font.hbs'));


var assetsDir = path.resolve(require.resolve('fur-resources/resources/index.js'), '../../assets');

function _resolveSrc(src) {
    if (fs.existsSync(src)) {
        return src;
    }
    var srcInAssets = path.resolve(assetsDir, src);
    if (fs.existsSync(srcInAssets)) {
        return srcInAssets;
    }
    throw new Error('Font not found: ' + src);
}

/** @lends styleWithFont */
function styleWithFont(src, options, callback) {
    var args = argx(arguments);
    options = args.pop('object') || {};
    src = args.shift();

    if (!src) {
        return null;
    }

    src = _resolveSrc(src);


    return tmpl({
        url: [
            'data:application/x-font-ttf;base64',
            fs.readFileSync(src).toString('base64')
        ].join(','),
        name: path.basename(src, path.extname(src)),
        format: options.format,
        selector: options.selector || 'text'
    });
}

module.exports = styleWithFont;