/**
 * Test case for colorTheme.
 * Runs with nodeunit.
 */

var ColorTheme = require('../lib/theming/color_theme.js');

exports['Color theme'] = function (test) {
    var theme = new ColorTheme();
    test.ok(theme);
    test.ok(theme.a);
    test.done();
};

