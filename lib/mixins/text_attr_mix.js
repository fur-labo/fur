/**
 * Mixin for text attr.
 * @memberof module:fur/lib/mixins
 * @inner
 * @mixin textAttrMix
 */

"use strict";

module.exports = Object.freeze(
    /** @lends textAttrMix */
    {
        /** Value of text */
        _text: undefined,
        /**
         * Get text value.
         * @function module:~NameStruct.prototype.text
         * @returns Value of text.
         */
        /**
         * Set name value.
         * @function module:~NameStruct.prototype.text
         * @param text - Value to set.
         * @returns Self.
         */
        text: function (text) {
            var s = this;
            if (arguments.length === 0) {
                return s._text;
            }
            s._text = text;
            return s;
        }
    }
);