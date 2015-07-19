/**
 * fur theming module
 * @module fur/lib/theming
 */

"use strict";

module.exports = {
    /**
     * @memberof module:fur/lib/theming
     * @name {@link module:fur/lib/theming~ColorThemeResolver|ColorThemeResolver}
     */
    get ColorThemeResolver() { return require('./color_theme_resolver'); },
    /**
     * @memberof module:fur/lib/theming
     * @name {@link module:fur/lib/theming~FontThemeResolver|FontThemeResolver}
     */
    get FontThemeResolver() { return require('./font_theme_resolver'); },
    get themeNameWithIndex() { return require('./theme_name_with_index'); },
    /**
     * @memberof module:fur/lib/theming
     * @name {@link module:fur/lib/theming~ThemeResolver|ThemeResolver}
     */
    get ThemeResolver() { return require('./theme_resolver'); }
};