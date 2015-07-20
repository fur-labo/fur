/**
 * Generate image file.
 * @memberof module:fur/lib/generating
 * @constructor ImageGenerator
 */

"use strict";


var async = require('async'),
    argx = require('argx'),
    path = require('path'),
    fs = require('fs'),
    execcli = require('execcli'),
    writeout = require('writeout'),
    copyFile = require('../util/file/copy_file');

/** @lends ImageGenerator */
function ImageGenerator() {

}

ImageGenerator.prototype = {
    _nameTmp: function (filename) {
        var dirname = path.dirname(filename),
            basename = path.basename(filename);
        return path.join(
            dirname,
            [basename, 'tmp', new Date().getTime(), 'svg'].join('.')
        );
    },
    _svg2png: function (src, dest, options, callback) {
        var sv2png = require.resolve('./phantom_scripts/svg2png.phantom.js');
        var width = options.width,
            height = options.height;
        execcli('phantomjs', sv2png, src, dest, width, height, callback);
    },
    /**
     * Writeout an image.
     * @param {string} filename - Filename to generate.
     * @param {object} svgString - Data of svg.
     * @param {object} options - Optional settings.
     * @param {string} [options.format='svg'] - Format of image.
     * @param {function} callback - Callback when done.
     */
    writeoutImage: function (filename, svgString, options, callback) {
        var args = argx(arguments);
        callback = args.pop('function') || argx.noop;
        filename = args.shift();
        svgString = args.shift();
        options = args.pop('object') || {};

        var s = this;
        var tmpFilename = s._nameTmp(filename),
            format = options.format || 'svg',
            width = options.width,
            height = options.height;
        async.series([
            function (callback) {
                writeout(tmpFilename, svgString, {
                    mkdirp: true
                }, callback);
            },
            function (callback) {
                switch (format) {
                    case 'svg':
                        copyFile(tmpFilename, filename, callback);
                        break;
                    case 'png':
                        s._svg2png(tmpFilename, filename, {
                            width: width,
                            height: height
                        }, callback);
                        break;
                    default:
                        callback(new Error('Not supported: ' + format));
                        break;
                }
            },
            function (callback) {
                fs.unlink(tmpFilename, callback);
            }
        ], callback);
    }
};


module.exports = ImageGenerator;
