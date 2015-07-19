/**
 * @memberof module:fur/lib
 * @inner
 * @constructor Fur
 */

"use strict";

var argx = require('argx');

/** @lends Fur **/
function Fur() {

}

Fur.prototype = {
    logo: function (filename, options, callback) {
        var args = argx(arguments);
        callback = args.pop('function') || argx.noop;
        options = args.pop('object') || {};
        filename = args.shift();
        var s = this;

        callback(null);
    }
};

module.exports = Fur;
