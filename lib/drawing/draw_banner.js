/**
 * Draw a banner.
 * @memberof module:fur/lib/drawing
 * @function drawBanner
 * @param {object} config - Draw configuration.
 * @param {string} config.text
 * @param {string[]} config.colors - Colors to use.
 * @param {string} config.font - Font filename.
 * @param {string} config.text - Text to write.
 * @param {number} config.width - Banner width.
 * @param {number} config.height - Banner width.
 * @param {string} config.style - Banner style.
 * @param {number} config.fontSize - Size of font.
 * @param {function} callback - Callback when done.
 */

"use strict";

var async = require('async'),
    styleWithFont = require('../styling/style_with_font');

/** @lends drawBanner */
function drawBanner(config, callback) {
    var colors = [].concat(config.colors);
    console.log('colors[0]', colors[0]);
    async.waterfall([
        function (callback) {
            styleWithFont(config.font, callback);
        },
        function (style, callback) {
            var w = config.width,
                h = config.height;
            var data = {
                '@': {
                    width: w,
                    height: h
                },
                style: {
                    '#': style
                },
                g: [
                    // Background layer.
                    {
                        rect: {
                            '@': {
                                x: 0, y: 0,
                                width: w, height: h,
                                fill: 'white'
                            }
                        }
                    },
                    // Text layer.
                    {
                        text: {
                            '#': config.text,
                            '@': {
                                'dominant-baseline': 'middle',
                                'text-anchor': 'middle',
                                x: w / 2,
                                y: h / 2,
                                fill: colors[0],
                                'font-size': config.fontSize
                            }
                        }
                    }
                ]
            };
            callback(null, data);
        }
    ], callback);
}

module.exports = drawBanner;