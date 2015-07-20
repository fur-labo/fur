/**
 * Favicon graphic.
 * @memberof module:fur/lib/drawing/graphics
 * @constructor FaviconGraphic
 */

"use strict";

var Graphic = require('./graphic'),
    h = require('./_helper'),
    mixins = require('../../mixins'),
    styleWithFont = require('../../styling/style_with_font');

module.exports = Graphic.define(
    /** @lends FaviconGraphic.prototype */
    {
        toSvgData: function () {
            var s = this,
                data = Graphic.prototype.toSvgData.apply(s, arguments);
            var width = s.size().width,
                height = s.size().height;

            var color = s.color(),
                text = s.text() || s.name();

            var reversed = true,
                borderWidth = 0,
                radius = 0;

            switch (s.style()) {
                case 'plain':
                    reversed = false;
                    break;
                case 'bordered':
                    reversed = false;
                    borderWidth = height * 0.1;
                    break;
                case 'rounded':
                    radius = height * 0.1;
                    break;
                case 'circle':
                    radius = height / 2;
                    break;
                case 'default':
                default:
                    break;
            }

            data.style = [
                styleWithFont(s.font())
            ];
            data.g = [
                {
                    //Background
                    rect: h.bgRect(width, height, {
                        fill: reversed ? color : 'white',
                        stroke: 'none',
                        rx: radius,
                        ry: radius
                    })
                },
                {
                    rect: h.borderRect(width, height, borderWidth, {
                        stroke: borderWidth ? color : 'white',
                        rx: radius,
                        ry: radius
                    })
                },
                {
                    // Text
                    text: h.centerText(width / 2, height / 2, text, {
                        fill: reversed ? 'white' : color,
                        'font-size': s.fontSize()
                    })
                }
            ];
            return data;
        }
    },
    [
        mixins.colorAttrMix,
        mixins.textAttrMix,
        mixins.styleAttrMix,
        mixins.fontAttrMix,
        mixins.fontSizeAttrMix
    ]
);