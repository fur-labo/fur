/**
 * Generate a SVG file.
 * @memberof module:fur/lib/generating
 * @function writeoutSvg
 * @param {string} filename - Filename to read.
 * @param {object} data - Data to write.
 * @param {function} callback - Callback when done.
 */

"use strict";

var js2xml = require('js2xmlparser'),
    stringcase = require('stringcase'),
    path = require('path'),
    extend = require('extend'),
    writeout = require('writeout');

/** @lends writeoutSvg */
function writeoutSvg(filename, data, callback) {
    var svg = extend(data, {});
    var name = stringcase.spinalcase(path.basename(filename, path.extname(filename)));
    svg['@'] = extend({
        id: ['svg', name].join('-'),
        xmlns: "http://www.w3.org/2000/svg"
    }, svg['@'], {});
    var xml = js2xml('svg', svg, {
        useCDATA: true
    });
    writeout(filename, xml, {
        mkdirp: true
    }, callback);
}

module.exports = writeoutSvg;