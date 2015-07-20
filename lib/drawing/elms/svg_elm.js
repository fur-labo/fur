/**
 * SVG element for svg.
 * @memberof module:fur/lib/drawing/elms
 * @inner
 * @constructor SvgElm
 */

"use strict";

var js2xml = require('js2xmlparser');

var SvgElmStruct = require('../../struct/svg_elm_struct'),
    extend = require('extend');

/** @lends SvgElm */
function SvgElm(data) {
    var s = this;
    s.set(SvgElm.defaults);
    s.set(data || {});
}

SvgElm.defaults = {
    xmlns: 'http://www.w3.org/2000/svg'
};

SvgElm.prototype = extend(new SvgElmStruct({}), {

    svgData: function () {
        var s = this,
            data = s.data();
        var svg = extend(data, {});
        svg['@'] = extend({
            id: s.id(),
            xmlns: s.xmlns()
        }, svg['@'], {});
        return svg;
    },
    toXml: function () {
        var s = this;
        return js2xml('svg', s.svgData(), {
            useCDATA: true
        });
    }
});

module.exports = SvgElm;