/**
 * Test for themeNameWithIndex
 * Runs with nodeunit
 */

"use strict";

var themeNameWithIndex = require('../lib/theming/theme_name_with_index');

exports['Covert to theme name.'] = function (test) {
    test.equal(themeNameWithIndex(0), 'a');
    test.equal(themeNameWithIndex(25), 'z');
    test.equal(themeNameWithIndex(26), 'aa');
    test.equal(themeNameWithIndex(27), 'ab');
    test.equal(themeNameWithIndex(1054), 'ano');
    test.done();
};
