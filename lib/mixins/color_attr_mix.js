/**
 * Mixin for color attr.
 * @memberof module:fur/lib/mixins
 * @inner
 * @mixin colorAttrMix
 */

"use strict";

module.exports = Object.freeze(
    /** @lends colorAttrMix */
    {
        /** Value of color */
        _color: undefined,
        /**
         * Get color value.
         * @function module:~NameStruct.prototype.color
         * @returns Value of color.
         */
        /**
         * Set name value.
         * @function module:~NameStruct.prototype.color
         * @param color - Value to set.
         * @returns Self.
         */
        color: function (color) {
            var s = this;
            if (arguments.length === 0) {
                return s._color;
            }
            s._color = color;
            return s;
        }
    }
);