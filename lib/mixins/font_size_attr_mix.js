/**
 * Mixin for fontSize attr.
 * @memberof module:fur/lib/mixins
 * @inner
 * @mixin fontSizeAttrMix
 */

"use strict";

module.exports = Object.freeze(
    /** @lends fontSizeAttrMix */
    {
        /** Value of fontSize */
        _fontSize: undefined,
        /**
         * Get fontSize value.
         * @function module:~NameStruct.prototype.fontSize
         * @returns Value of fontSize.
         */
        /**
         * Set name value.
         * @function module:~NameStruct.prototype.fontSize
         * @param fontSize - Value to set.
         * @returns Self.
         */
        fontSize: function (fontSize) {
            var s = this;
            if (arguments.length === 0) {
                return s._fontSize;
            }
            s._fontSize = fontSize;
            return s;
        }
    }
);