/**
 * Abstract graphic.
 * @abstract
 * @memberof module:fur/lib/drawing/graphics
 * @constructor Graphic
 */

"use strict";

var extend = require('extend'),
    stringcase = require('stringcase'),
    js2xml = require('js2xmlparser');

var mixins = require('../../mixins');


/** @lends Graphic */
function Graphic() {
    var s = this;
    s.init.apply(s, arguments);
}

Graphic.prototype = extend({
        init: function () {
        },
        toSvgData: function () {
            var s = this,
                size = s.size() || {width: 128, height: 128},
                name = s.name() || new Date().getTime();
            return {
                '@': {
                    id: [stringcase.spinalcase(name), 'svg'].join('-'),
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: size.width,
                    height: size.height,
                    viewbox: [
                        0, 0, size.width, size.height
                    ].join(' ')
                }
            }
        },
        toSvgXml: function () {
            var s = this,
                data = s.toSvgData();
            return js2xml('svg', data, {
                useCDATA: true
            });
        }
    },
    mixins.nameAttrMix,
    mixins.sizeAttrMix
);

/**
 * Define a new graphic.
 * @param {object} properties - Prototype properties.
 * @param {object[]} mixins - Mixins.
 * @returns {function} - Defined constructor.
 */
Graphic.define = function (properties, mixins) {
    function Defined() {
        var s = this;
        s.init.apply(s, arguments);
    }

    Defined.prototype = extend.apply(extend,
        [new Graphic({}), properties].concat(mixins || {})
    );


    return Defined;
};

module.exports = Graphic;