/**
 * Compile handlebars source file.
 * @memberof module:furl/lib/compiling
 * @function compileHbsSrc
 * @param {string} src - Source filename.
 * @param {object} options - Optional settings.
 * @returns {function} - Compiled function.
 */

"use strict";

var Handlebars = require('handlebars'),
    fs = require('fs');

/** @lends compileHbsSrc */
function compileHbsSrc(src, options) {
    var handlebars = Handlebars.create();
    var content = String(fs.readFileSync(src));
    return handlebars.compile(content);
}

module.exports = compileHbsSrc;

