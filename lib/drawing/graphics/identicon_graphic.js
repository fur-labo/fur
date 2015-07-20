/**
 * Identicon graphic.
 * @memberof module:fur/lib/drawing/graphics
 * @inner
 * @constructor IdenticonGraphic
 */

"use strict";

var Graphic = require('./graphic'),
    h = require('./_helper'),
    mixins = require('../../mixins');

module.exports = Graphic.define(
    /** @lends IdenticonGraphic.prototype */
    {
        toSvgData: function () {
            var s = this,
                data = Graphic.prototype.toSvgData.apply(s, arguments);

            var width = s.size().width,
                height = s.size().height;


            data.style = [
            ];
            data.g = [
            ];
            return data;
        }
    },
    [
    ]
);