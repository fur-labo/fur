/**
 * Resolve font theme.
 * @augments module:fur/lib/theming~ThemeResolver
 * @memberof module:fur/lib/theming
 * @inner
 * @constructor FontThemeResolver
 * @param {object} config - Resolve configuration.
 */

"use strict";

var ThemeResolver = require('./theme_resolver'),
    path = require('path'),
    extend = require('extend'),
    defaultThemes = require('../../docs/themes/font-theme');


function _resolveThemes(themes, basedir) {
    var resolved = {};
    Object.keys(themes).forEach(function (key) {
        var theme = extend(themes[key]);
        theme.src = path.resolve(basedir, theme.src);
        resolved[key] = theme;
    });
    return resolved;
}


module.exports = ThemeResolver.define(
    /** @lends module:fur/lib/theming~FontThemeResolver.prototype */
    {
        init: function () {
            var s = this;
            ThemeResolver.prototype.init.apply(s, arguments);

            var fontsDir = path.resolve(__dirname, '../../docs/assets');
            s.addThemes(_resolveThemes(defaultThemes, fontsDir));
        }
    }
);