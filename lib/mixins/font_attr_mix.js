/**
 * Mixin for font attr.
 * @memberof module:fur/lib/mixins
 * @inner
 * @mixin fontAttrMix
 */

"use strict";

module.exports = Object.freeze(
    /** @lends fontAttrMix */
    {
        /** Value of font */
        _font: undefined,
        /**
         * Get font value.
         * @function module:~NameStruct.prototype.font
         * @returns Value of font.
         */
        /**
         * Set name value.
         * @function module:~NameStruct.prototype.font
         * @param font - Value to set.
         * @returns Self.
         */
        font: function (font) {
            var s = this;
            if (arguments.length === 0) {
                return s._font;
            }
            s._font = font;
            return s;
        }
    }
);