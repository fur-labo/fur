/**
 * fur generating module
 * @module fur/lib/generating
 */

"use strict";

module.exports = {
    get convertSvgFile() { return require('./convert_svg_file'); },
    get copyFile() { return require('./copy_file'); },
    get imageGenerator() { return require('./image_generator'); },
    get writeoutSvg() { return require('./writeout_svg'); }
};