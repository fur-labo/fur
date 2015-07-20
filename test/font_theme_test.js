/**
 * Test case for fontTheme.
 * Runs with nodeunit.
 */

var FontTheme = require('../lib/theming/font_theme.js');

exports['Font theme'] = function (test) {
    var theme = new FontTheme();
    test.ok(theme);
    test.ok(theme.a);
    test.done();
};

