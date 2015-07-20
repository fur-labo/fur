/**
 * SVG element for rect.
 * @memberof module:fur/lib/drawing/elms
 * @inner
 * @constructor RectElm
 */

"use strict";

var RectElmStruct = require('../../struct/rect_elm_struct'),
    extend = require('extend');

/** @lends RectElm */
function RectElm(data) {
    var s = this;
    s.set(data || {});
}

RectElm.prototype = extend(new RectElmStruct({}), {
    /**
     * Convert to svg data.
     * @returns {object} data
     */
    svgData: function () {
        var s = this;
        return {
            '@': {
                x: s.x() || 0,
                y: s.y() || 0,
                width: s.width(),
                height: s.height(),
                fill: s.fill()
            }
        }
    }
});

RectElm.backgroundRect = function (size) {
    return new RectElm()
        .width(size.width())
        .height(size.height());
};

module.exports = RectElm;


