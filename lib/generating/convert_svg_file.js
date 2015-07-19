/**
 * Convert svg file.
 * @memberof module:fur/lib/generating
 * @function convertSvgFile
 * @param {string} src - Source svg filename.
 * @param {string} dest - Destination file name.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.format='svg'] - Type to convert.
 * @param {boolean} [options.clean=false] - Unlink src after done.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var async = require('async'),
    argx = require('argx'),
    fs = require('fs'),
    copyFile = require('./copy_file');

/** @lends convertSvgFile */
function convertSvgFile(src, dest, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || args.noop;
    src = args.shift();
    dest = args.shift();
    options = args.pop('object') || {};

    async.series([
        function (callback) {
            var format = options.format || 'svg';
            switch (format) {
                case 'svg':
                    copyFile(src, dest, callback);
                    break;
                default:
                    callback(new Error('Not supported: ' + format));
                    break;
            }
        },
        function (callback) {
            var clean = !!options.clean;
            if (clean) {
                fs.unlink(src, callback);
            } else {
                callback(null);
            }
        }
    ], callback);

}

module.exports = convertSvgFile;
