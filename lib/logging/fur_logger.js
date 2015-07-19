/**
 * Logger for fur.
 * @memberof module:fur/lib/logging/FurLogger
 * @constructor FurLogger
 */


"use strict";

var path = require('path'),
    colorprint = require('colorprint');

/** @lends FurLogger */
function FurLogger() {

}

FurLogger.prototype = {
    /**
     * Log that a image generated.
     * @param {string} filename - Filename of the image.
     */
    logImageGenerated: function (filename) {
        filename = path.relative(process.cwd(), path.resolve(filename));
        colorprint.debug('File generated: ' + filename);
    }
};

module.exports = FurLogger;
