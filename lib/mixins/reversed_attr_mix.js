/**
 * Mixin for reversed attr.
 * @memberof module:fur/lib/mixins
 * @inner
 * @mixin reversedAttrMix
 */

"use strict";

module.exports = Object.freeze(
    /** @lends reversedAttrMix */
    {
        /** Value of reversed */
        _reversed: undefined,
        /**
         * Get reversed value.
         * @function module:~NameStruct.prototype.reversed
         * @returns Value of reversed.
         */
        /**
         * Set name value.
         * @function module:~NameStruct.prototype.reversed
         * @param reversed - Value to set.
         * @returns Self.
         */
        reversed: function (reversed) {
            var s = this;
            if (arguments.length === 0) {
                return s._reversed;
            }
            s._reversed = reversed;
            return s;
        }
    }
);