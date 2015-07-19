/**
 * Test case for themeResolver.
 * Runs with nodeunit.
 */

var ThemeResolver = require('../lib/theming/theme_resolver.js');

exports['Theme resolver'] = function (test) {
    test.ok(ThemeResolver);
    var resolver = new ThemeResolver({});
    test.ok(resolver);
    test.done();
};

