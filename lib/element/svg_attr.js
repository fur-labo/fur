/**
 * Define svg attr data.
 * @memberof module:fur/lib/element
 * @function svgAttr
 * @param {string} - Font theme string.
 * @param {string} id - SVG element id.
 * @param {number} width - Image width.
 * @param {number} height - Image height.
 * @returns {object} - SVG element data.
 */

"use strict";

/** @lends svgAttr */
function svgAttr(id, width, height) {
    return {
        id: id,
        xmlns: "http://www.w3.org/2000/svg",
        width: width,
        height: height,
        viewbox: [0, 0, width, height].join(' ')
    };
}

module.exports = svgAttr;