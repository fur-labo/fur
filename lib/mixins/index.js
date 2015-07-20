/**
 * fur mixin module
 * @module fur/lib/mixins
 */

"use strict";

module.exports = {
    get colorAttrMix() { return require('./color_attr_mix'); },
    get fontAttrMix() { return require('./font_attr_mix'); },
    get fontSizeAttrMix() { return require('./font_size_attr_mix'); },
    get nameAttrMix() { return require('./name_attr_mix'); },
    get reversedAttrMix() { return require('./reversed_attr_mix'); },
    get sizeAttrMix() { return require('./size_attr_mix'); },
    get styleAttrMix() { return require('./style_attr_mix'); },
    get textAttrMix() { return require('./text_attr_mix'); }
};