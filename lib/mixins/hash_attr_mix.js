/**
 * Mixin for hash attr.
 * @memberof module:fur/lib/mixins
 * @inner
 * @mixin hashAttrMix
 */

"use strict";

module.exports = Object.freeze(
    /** @lends hashAttrMix */
    {
        /** Value of hash */
        _hash: undefined,
        /**
         * Get hash value.
         * @function module:~NameStruct.prototype.hash
         * @returns Value of hash.
         */
        /**
         * Set name value.
         * @function module:~NameStruct.prototype.hash
         * @param hash - Value to set.
         * @returns Self.
         */
        hash: function (hash) {
            var s = this;
            if (arguments.length === 0) {
                return s._hash;
            }
            s._hash = hash;
            return s;
        }
    }
);