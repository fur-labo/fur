/**
 * Copy a file.
 * @memberof module:fur/lib/generating
 * @function copyFile
 * @param {string} src - File to copy from.
 * @param {string} dest - File to copy to.
 * @param {object} options
 * @param {function} callback - Callback when done.
 */

"use strict";

var fs = require('fs'),
    argx = require('argx');

/** @lends copyFile */
function copyFile(src, dest, options, callback) {
    var args = argx(arguments);
    src = args.shift();
    dest = args.shift();
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};

    var read = fs.createReadStream(src);
    var write = fs.createWriteStream(dest);
    read.on("error", function (err) {
        callback(err);
    });
    write.on("error", function (err) {
        callback(err);
    });
    write.on("close", function () {
        callback();
    });
    read.pipe(write);
}

module.exports = copyFile;