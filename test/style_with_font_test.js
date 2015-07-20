/**
 * Test case for styleWithFont.
 * Runs with nodeunit.
 */

var styleWithFont = require('../lib/styling/style_with_font.js'),
    path = require('path');

exports['Style with font'] = function (test) {
    var src = path.resolve(__dirname, '../docs/assets/fonts/Alef-Regular.ttf');
    var style = styleWithFont(src, {
        format: "truetype"
    });
    test.ok(style);
    test.done();
};

