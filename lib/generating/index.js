/**
 * fur generating module
 * @module fur/lib/generating
 */

"use strict";

module.exports = {
    get copyFile() { return require('./copy_file'); },
    get writeoutSvg() { return require('./writeout_svg'); }
};