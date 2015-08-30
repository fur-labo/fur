/**
 * SVG data for font style.
 * @memberof module:fur/lib/element
 * @function fontStyleElm
 * @param {string} - Font theme string.
 * @returns {object} - SVG element data.
 */

"use strict";

var util = require('util'),
    os = require('os');

var furFonts = require('fur-fonts');

/** @lends fontStyleElm */
function fontStyleElm(theme) {
    var url = [
        'data:application/x-font-ttf;base64',
        furFonts[theme]().toString('base64')
    ].join(',');
    var name = 'fur-font-' + theme;
    return {
        '#': [
            util.format('@font-face {font-family: "%s";src: url("%s")}', name, url),
            util.format('text{font-family: "%s";}', name)
        ].join(os.EOL)
    }
}

module.exports = fontStyleElm;
