/**
 * Abstract theme.
 * @memberof module:fur/lib/theming
 * @constructor Theme
 */

"use strict";

var themeNameWithIndex = require('./theme_name_with_index'),
    extend = require('extend');

function Theme() {
}

Theme.prototype = {
    /**
     * Add theme value.
     * @param {string} val - Value to add.
     * @returns Self
     */
    add: function (val) {
        var s = this,
            name = themeNameWithIndex(Object.keys(s));
        s[name] = val;
    },
    /**
     * Set multiple data.
     * @param {object} data - Data to set.
     */
    set: function (data) {
        var s = this,
            keys = Object.keys(data);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            s[key] = data[key];
        }
    },
    /**
     * Get value index.
     * @param {number} index - Index.
     * @returns {*}
     */
    getByIndex: function (index) {
        var s = this;
        var keys = Object.keys(s);
        index = index % keys.length;
        if (index < 0) {
            index += keys.length;
        }
        return s[keys[index]];
    }
};

/**
 * Define a new theme.
 * @param {object} config - Configuration.
 * @param {object} config.defaults - Default values.
 * @returns {function} - Theme constructor.
 */
Theme.define = function (config) {
    function Defined() {
        var s = this;
        s.set(config.defaults);
    }

    Defined.prototype = new Theme();

    return Defined;
};

module.exports = Theme;