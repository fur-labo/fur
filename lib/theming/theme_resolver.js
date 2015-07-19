/**
 * Resolve theme.
 * @abstract
 * @memberof module:fur/lib/theming
 * @inner
 * @constructor ThemeResolver
 * @param {object} config - Resolve configuration.
 */

"use strict";

var extend = require('extend');

/** @lends ThemeResolver **/
function ThemeResolver() {
    var s = this;
    s.init.apply(s, arguments);
}

ThemeResolver.prototype = {
    _themes: undefined,
    init: function () {
        var s = this;
        s._themes = {};
        return s;
    },
    /**
     * Add a theme.
     * @param key
     * @param val
     */
    addTheme: function (key, val) {
        var s = this;
        s._themes[key] = val;
        return s;
    },
    /**
     * Add multiple themes.
     * @param {object} themes - Themes to add.
     */
    addThemes: function (themes) {
        var s = this;
        Object.keys(themes || {}).forEach(function (key) {
            s.addTheme(key, themes[key]);
        });
        return s;
    },
    /**
     * Resolve a theme.
     * @param {string} key - Key to resolve.
     */
    resolve: function (key) {
        var s = this;
        var isKnown = s._themes.hasOwnProperty(key);
        if(!isKnown){
            throw new Error('Unknown theme: ' + key);
        }
        return s._themes[key];
    }
};

ThemeResolver.define = function (properties) {
    function Defined() {
        var s = this;
        s.init.apply(s, arguments);
    }

    Defined.prototype = extend(new ThemeResolver(), properties);

    return Defined;
};

module.exports = ThemeResolver;
