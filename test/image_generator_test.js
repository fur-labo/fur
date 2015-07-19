/**
 * Test case for imageGenerator.
 * Runs with nodeunit.
 */

var ImageGenerator = require('../lib/generating/image_generator.js'),
    path = require('path');

exports['Image generator'] = function (test) {
    var generator = new ImageGenerator();
    var filename = path.resolve(__dirname, '../tmp/testing_generated.svg');
    generator.writeoutImage(filename, {
        '@': {
            width: 300, height: 300
        },
        rect: {
            '@': {
                x: 0, y: 0,
                width: 100, height: 100, fill: '#38E'

            }
        }
    }, {format: 'svg'}, function (err) {
        test.ifError(err);
        test.done();
    });
};

