/**
 * SVG element for text.
 * @memberof module:fur/lib/elms
 * @inner
 * @constructor TextElm
 */

"use strict";

var TextElmStruct = require('../../struct/text_elm_struct'),
    extend = require('extend');

/** @lends TextElm */
function TextElm(data) {
    var s = this;
    s.set(data || {});
}

TextElm.prototype = extend(new TextElmStruct({}), {
    /**
     * Convert to svg data.
     * @returns {object} data
     */
    svgData: function () {
        var s = this;
        return {
            '#': s.text(),
            '@': {
                'dominant-baseline': s.domainBaseline(),
                'text-anchor': s.textAnchor(),
                x: s.x(),
                y: s.y(),
                fill: s.fill(),
                'font-size': s.fontSize()
            }
        }
    }
});

TextElm.centeredText = function (size) {
    return new TextElm()
        .domainBaseline('middle')
        .textAnchor('middle')
        .x(size.width() / 2).y(size.height() / 2);
};

module.exports = TextElm;


