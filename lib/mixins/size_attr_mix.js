/**
 * Mixin for size attr.
 * @memberof module:fur/lib/mixins
 * @inner
 * @mixin sizeAttrMix
 */

"use strict";

module.exports = Object.freeze(
    /** @lends sizeAttrMix */
    {
        /** Value of size */
        _size: undefined,
        /**
         * Get size value.
         * @function module:~NameStruct.prototype.size
         * @returns Value of size.
         */
        /**
         * Set name value.
         * @function module:~NameStruct.prototype.size
         * @param size - Value to set.
         * @returns Self.
         */
        size: function (size) {
            var s = this;
            if (arguments.length === 0) {
                return s._size;
            }
            s._size = size;
            return s;
        }
    }
);