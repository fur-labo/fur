/**
 * Test case for theme.
 * Runs with nodeunit.
 */

var Theme = require('../lib/theming/theme.js');

exports['Theme'] = function (test) {
    var theme = new Theme();
    theme.add('foo');
    test.equal(theme.a, 'foo');
    test.done();
};

