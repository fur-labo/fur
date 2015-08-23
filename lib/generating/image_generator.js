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
    svgpng = require('svgpng'),
    writeout = require('writeout'),
    filecopy = require('filecopy');

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
                        filecopy(tmpFilename, filename, {
                            mkdirp: true
                        }, callback);
                        break;
                    case 'png':
                        svgpng(tmpFilename, filename, {
                            size: {
                                width: width,
                                height: height
                            }
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
