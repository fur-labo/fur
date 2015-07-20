/**
 * Mixin for style attr.
 * @memberof module:fur/lib/mixins
 * @inner
 * @mixin styleAttrMix
 */

"use strict";

module.exports = Object.freeze(
    /** @lends styleAttrMix */
    {
        /** Value of style */
        _style: undefined,
        /**
         * Get style value.
         * @function module:~NameStruct.prototype.style
         * @returns Value of style.
         */
        /**
         * Set name value.
         * @function module:~NameStruct.prototype.style
         * @param style - Value to set.
         * @returns Self.
         */
        style: function (style) {
            var s = this;
            if (arguments.length === 0) {
                return s._style;
            }
            s._style = style;
            return s;
        }
    }
);