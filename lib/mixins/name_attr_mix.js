/**
 * Mixin for name attr.
 * @memberof module:fur/lib/mixins
 * @inner
 * @mixin nameAttrMix
 */

"use strict";

module.exports = Object.freeze(
    /** @lends nameAttrMix */
    {
        /** Value of name */
        _name: undefined,
        /**
         * Get name value.
         * @function module:~NameStruct.prototype.name
         * @returns Value of name.
         */
        /**
         * Set name value.
         * @function module:~NameStruct.prototype.name
         * @param name - Value to set.
         * @returns Self.
         */
        name: function (name) {
            var s = this;
            if (arguments.length === 0) {
                return s._name;
            }
            s._name = name;
            return s;
        }
    }
);