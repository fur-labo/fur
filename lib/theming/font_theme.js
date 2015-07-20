/**
 * Font themes.
 * @memberof module:fur/lib/theming
 * @inner
 * @constructor FontTheme
 */

"use strict";

var Theme = require('./theme'),
    fontTheme = require('../../docs/themes/font-theme.json');

/** @lends module:fur/lib/theming~FontTheme */
module.exports = Theme.define({
    defaults: fontTheme
});
