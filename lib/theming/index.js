/**
 * fur theming module
 * @module fur/lib/theming
 */

"use strict";

module.exports = {
    get colorTheme() { return require('./color_theme'); },
    get fontTheme() { return require('./font_theme'); },
    get themeNameWithIndex() { return require('./theme_name_with_index'); },
    get theme() { return require('./theme'); }
};