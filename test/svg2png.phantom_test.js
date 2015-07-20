/**
 * Test case for svg2pngPhantom.
 * Runs with nodeunit.
 */

var svg2pngPhantom = require.resolve('../lib/generating/phantom_scripts/svg2png.phantom.js');

exports['Svg2png phantom'] = function (test) {
    test.ok(svg2pngPhantom);
    test.done();
};

