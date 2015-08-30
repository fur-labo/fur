/**
 * Generator for favicon.
 * @augment Generator
 * @constructor FaviconGenerator
 */

"use strict";

var Generator = require('./generator'),
    textElm = require('../element/text_elm'),
    svgAttr = require('../element/svg_attr'),
    colorAttr = require('../element/color_attr'),
    shapeElm = require('../element/shape_elm'),
    path = require('path'),
    stringcase = require('stringcase'),
    fontStyleElm = require('../element/font_style_elm');

/** @lends FaviconGenerator */
module.exports = Generator.define({
    size: 256,
    shape: 'e',
    color: 'j',
    font: 'k',
    text: 'smpl',
    fontSize: null,
    svgData: function (id) {
        var s = this;

        var w = s.size,
            h = s.size,
            shape = s.shape,
            font = s.font,
            color = s.color,
            fontSize = s.fontSize || h * 0.75;

        return {
            '@': svgAttr(id, w, h),
            style: fontStyleElm(font),
            g: [
                {
                    svg: shapeElm(shape, w, h, color)
                },
                {
                    '@': colorAttr(color, shapeElm.isReversed(shape)),
                    text: textElm(w / 2, h / 2, s.text, fontSize)
                }
            ]
        }
    },
    generate: function (filename, callback) {
        var s = this;
        var basename = path.basename(filename, path.extname(filename));
        var id = 'fur-favicon-' + stringcase.spinalcase(basename);
        var data = s.svgData(id);
        s.render(filename, s.format, data, callback);
    }
});
