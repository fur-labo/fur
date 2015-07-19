/**
 * Resolve color theme.
 * @augments module:fur/lib/theming~ThemeResolver
 * @memberof module:fur/lib/theming
 * @inner
 * @constructor ColorThemeResolver
 * @param {object} config - Resolve configuration.
 */

"use strict";

var ThemeResolver = require('./theme_resolver'),
    defaultThemes = require('../../docs/themes/color-theme');


module.exports = ThemeResolver.define(
    /** @lends module:fur/lib/theming~ColorThemeResolver.prototype */
    {
        init: function () {
            var s = this;
            ThemeResolver.prototype.init.apply(s, arguments);
            s.addThemes(defaultThemes);
        }
    }
);