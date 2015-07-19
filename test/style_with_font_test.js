/**
 * Test case for styleWithFont.
 * Runs with nodeunit.
 */

var styleWithFont = require('../lib/styling/style_with_font.js'),
    path = require('path');

exports['Style with font'] = function (test) {
    var src = path.resolve(__dirname, '../docs/assets/fonts/Alef-Regular.ttf');
    styleWithFont(src, {
        format: "truetype"
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

