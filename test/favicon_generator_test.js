/**
 * Test case for faviconGenerator.
 * Runs with nodeunit.
 */

var FaviconGenerator = require('../lib/generators/favicon_generator.js'),
    mkdirp = require('mkdirp');

var tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Favicon generator'] = function (test) {
    var generator = new FaviconGenerator({});
    test.ok(generator);
    var filename = tmpDir + '/testing-favicon.svg';
    generator.generate(filename, function (err) {
        test.ifError(err);
        test.done();
    });
};

