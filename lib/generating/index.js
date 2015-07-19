/**
 * fur generating module
 * @module fur/lib/generating
 */

"use strict";

module.exports = {
    get copyFile() { return require('./copy_file'); },
    get imageGenerator() { return require('./image_generator'); },
    get writeoutSvg() { return require('./writeout_svg'); }
};