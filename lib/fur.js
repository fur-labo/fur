/**
 * A fur context.
 * @memberof module:fur/lib
 * @inner
 * @constructor Fur
 */

"use strict";

var argx = require('argx'),
    async = require('async'),
    furLogger = require('fur-logger'),
    FaviconGenerator = require('./generators/favicon_generator');


/** @lends Fur **/
function Fur() {
    var s = this;
}

Fur.prototype = {
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

        new FaviconGenerator();
    }
};
module.exports = Fur;
