/**
 * Generator for favicon.
 * @augment Generator
 * @constructor FaviconGenerator
 */

"use strict";

var Generator = require('./generator'),
    randomval = require('randomval'),
    textElm = require('../elements/text_elm'),
    svgAttr = require('../elements/svg_attr'),
    fontStyleElm = require('../elements/font_style_elm');

/** @lends FaviconGenerator */
module.exports = Generator.define({
    svgData: function () {
        var s = this;

        var size = 256,
            font = 'c',
            color = '#38E',
            text = 'foo',
            fontSize = size * 0.75;

        var id = 'favicon-' + randomval.randomHash();
        return {
            '@': svgAttr(id, size, size),
            style: fontStyleElm(font),
            g: [
                {
                    '@': {
                        fill: color,
                        stroke: 'none'
                    },
                    text: textElm(size / 2, size / 2, text, fontSize)
                }
            ]
        }
    },
    generate: function (filename, callback) {
        var s = this,
            data = s.svgData();
        s.renderSvg(filename, data, callback);
    }
});
