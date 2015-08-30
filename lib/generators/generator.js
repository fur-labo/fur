/**
 * Abstract Generator
 * @abstract
 * @memberof module:fur/lib
 * @constructor Generator
 */

"use strict";

var extend = require('extend'),
    async = require('async'),
    path = require('path'),
    filedel = require('filedel'),
    svgpng = require('svgpng'),
    writexml = require('writexml'),
    FurLogger = require('fur-logger');

/** @lens Generator */
function Generator() {
    var s = this;
    s.init.apply(s, arguments);
}

Generator.prototype = {
    /**
     * Initialize Generator.
     * @param {object} config - Generator config.
     */
    init: function (config) {
        var s = this;
        extend(s, config || {});
    },
    logger: new FurLogger(),
    /**
     * Render a svg file.
     * @param {string} filename - Filename to render.
     * @param {object} data - SVG data.
     * @param {function} callback - Callback when done.
     */
    renderSvg: function (filename, data, callback) {
        var s = this;
        async.series([
            function (callback) {
                writexml(filename, 'svg', data, callback);
            }
        ], function (err) {
            callback(err);
        });
    },
    /**
     * Render a png file.
     * @param {string} filename - Filename to render.
     * @param {object} svgData - SVG data.
     * @param {function} callback - Callback when done.
     */
    renderPng: function (filename, svgData, callback) {
        var s = this,
            destDir = path.dirname(filename),
            basename = path.basename(filename);

        var svgAttr = svgData['@'] || {};
        var width = Number(svgAttr['width'] || 256),
            height = Number(svgAttr['height'] || 256);

        var tmpFile = path.resolve(destDir, '.tmp.' + basename + '.' + new Date().getTime() + '.svg');
        async.series([
            function (callback) {
                s.renderSvg(tmpFile, svgData, callback);
            },
            function (callback) {
                svgpng(tmpFile, filename, {
                    size: {
                        width: width,
                        height: height
                    }
                }, tmpFile, callback);
            }
        ], function (err) {
            filedel(tmpFile, {
                force: true
            }, function () {
                callback(err);
            });
        });
    }
};

Generator.define = function (properties) {
    function Defined() {
        var s = this;
        s.init.apply(s, arguments);
    }

    Defined.prototype = extend({}, Object.create(Generator.prototype), properties);
    return Defined;
};

module.exports = Generator;
