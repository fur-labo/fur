/**
 * Test case for colorThemeResolver.
 * Runs with nodeunit.
 */

var ColorThemeResolver = require('../lib/theming/color_theme_resolver.js');

exports['Color theme resolver'] = function (test) {
    var resolver = new ColorThemeResolver({});
    test.ok(resolver);
    test.ok(resolver.resolve('a'));
    test.done();
};

