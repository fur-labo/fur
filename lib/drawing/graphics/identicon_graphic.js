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

function _fill(number, hash) {
    var hashString = String(hash);
    var i = Number(number + 255) % hashString.length;
    return Number(hashString[i]) % 2 === 0;

}

module.exports = Graphic.define(
    /** @lends IdenticonGraphic.prototype */
    {
        toSvgData: function () {
            var s = this,
                data = Graphic.prototype.toSvgData.apply(s, arguments);
            var hash = s.hash(),
                color = s.color() || '#CCC';
            var width = s.size().width,
                height = s.size().height;


            var rows = 5, cols = 5;
            var gridRects = [],
                gridWidth = parseInt(width / cols),
                gridHeight = parseInt(height / rows);

            for (var row = 0; row < rows; row++) {
                for (var col = 0; col < cols; col++) {
                    var x = Number(row), y = Math.abs((cols - 1) / 2 - col);
                    var fill = _fill(x + y, hash);
                    gridRects.push(
                        h.gridRect(row, col, gridWidth, gridHeight, {
                            fill: fill ? color : 'none'
                        })
                    );
                }
            }


            data.style = [];
            data.g = [].concat({
                rect: gridRects
            });
            return data;
        }
    },
    [
        mixins.colorAttrMix,
        mixins.hashAttrMix
    ]
);