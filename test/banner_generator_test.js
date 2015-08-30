/**
 * Test case for bannerGenerator.
 * Runs with nodeunit.
 */

var BannerGenerator = require('../lib/generators/banner_generator.js'),
    fs = require('fs'),
    mkdirp = require('mkdirp');

var tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Banner generator'] = function (test) {
    var generator = new BannerGenerator({
        color: 'a',
        shape:'a'
    });
    test.ok(generator);
    var filename = tmpDir + '/testing-banner.svg';
    generator.generate(filename, function (err) {
        test.ifError(err);
        test.ok(fs.existsSync(filename));
        test.done();
    });
};

