/**
 * Test case for writeoutSvg.
 * Runs with nodeunit.
 */

var writeoutSvg = require('../lib/generating/writeout_svg.js'),
    path = require('path');

var tmpDir = path.resolve(__dirname, '../tmp');

exports['Writeout svg'] = function (test) {
    writeoutSvg(tmpDir + '/testing-svg.svg', {
        '@': {
            "width": 200,
            "height": 30
        },
        text: {
            "@": {
                "x": 0,
                "y": 15,
                "fill": "#E10"
            },
            "#": "foo"
        }
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

