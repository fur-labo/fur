/**
 * Draw a banner.
 * @memberof module:fur/lib/drawing
 * @function drawBanner
 * @param {object} config - Draw configuration.
 * @param {string[]} config.colors - Colors to use.
 * @param {string} config.text - Text to write.
 * @param {SizeStruct} config.size - Banner size.
 * @param {string} config.style - Banner style.
 * @param {FontStruct} config.font - Font.
 * @param {function} callback - Callback when done.
 */

"use strict";

var async = require('async'),
    styleWithFont = require('../styling/style_with_font'),
    TextElm = require('./elms/text_elm'),
    RectElm = require('./elms/rect_elm');

/** @lends drawBanner */
function drawBanner(config, callback) {
    var colors = [].concat(config.colors);
    var size = config.size,
        font = config.font;

    async.waterfall([
        function (callback) {
            styleWithFont(font.src(), callback);
        },
        function (style, callback) {
            var data = {
                '@': size.get(),
                style: {
                    '#': style
                },
                g: [
                    // Background layer.
                    {
                        rect: RectElm.backgroundRect(size)
                            .fill('white')
                            .svgData()
                    },
                    // Text layer.
                    {
                        text: TextElm.centeredText(size)
                            .text(config.text)
                            .fill(colors[0])
                            .fontSize(font.size())
                            .svgData()
                    }
                ]
            };
            callback(null, data);
        }
    ], callback);
}

module.exports = drawBanner;