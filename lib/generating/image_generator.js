/**
 * Generate image file.
 * @memberof module:fur/lib/generating
 * @constructor ImageGenerator
 */

"use strict";


var async = require('async'),
    argx = require('argx'),
    fs = require('fs'),
    copyFile = require('./copy_file'),
    writeoutSvg = require('./writeout_svg');

/** @lends ImageGenerator */
function ImageGenerator() {

}

ImageGenerator.prototype = {
    _nameTmp: function (filename) {
        return filename + '.tmp.' + new Date().getTime();
    },
    /**
     * Writeout an image.
     * @param {string} filename - Filename to generate.
     * @param {object} svgData - Data of svg.
     * @param {object} options - Optional settings.
     * @param {string} [options.format='svg'] - Format of image.
     * @param {function} callback - Callback when done.
     */
    writeoutImage: function (filename, svgData, options, callback) {
        var args = argx(arguments);
        callback = args.pop('function') || argx.noop;
        filename = args.shift();
        svgData = args.shift();
        options = args.pop('object') || {};

        var s = this;

        var tmpFilename = s._nameTmp(filename),
            format = options.format || 'svg';
        async.series([
            function (callback) {
                writeoutSvg(tmpFilename, svgData, callback);
            },
            function (callback) {
                switch (format) {
                    case 'svg':
                        copyFile(tmpFilename, filename, callback);
                        break;
                    // TODO handle PNG files.
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
