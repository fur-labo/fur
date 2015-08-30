/**
 * Generator for favicon.
 * @augment Generator
 * @constructor FaviconGenerator
 */

"use strict";

var Generator = require('./generator');

/** @lends FaviconGenerator */
module.exports = Generator.define({
    generate: function (filename, callback) {
        callback(null);
    }
});
