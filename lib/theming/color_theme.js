/**
 * Color themes.
 * @memberof module:fur/lib/theming
 * @inner
 * @constructor ColorTheme
 */

"use strict";

var Theme = require('./theme'),
    colorTheme = require('../../docs/themes/color-theme.json');

/** @lends module:fur/lib/theming~ColorTheme */
module.exports = Theme.define({
    defaults: colorTheme
});
