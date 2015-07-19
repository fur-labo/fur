/**
 * Test case for fontThemeResolver.
 * Runs with nodeunit.
 */

var FontThemeResolver = require('../lib/theming/font_theme_resolver.js');

exports['Font theme resolver'] = function (test) {
    var resolver = new FontThemeResolver({});
    test.ok(resolver);
    test.ok(resolver.resolve('b'));
    test.done();
};

