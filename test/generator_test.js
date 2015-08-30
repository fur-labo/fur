/**
 * Test case for generator.
 * Runs with nodeunit.
 */

var Generator = require('../lib/generators/generator.js'),
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

exports['Render svg'] = function (test) {
    var generator = new Generator({});
    test.ok(generator);
    var filename = tmpDir + '/testing-generate-svg.svg';
    generator.renderSvg(filename, {
        text: {
            '#': 'foo'
        }
    }, function (err) {
        test.ok(fs.existsSync(filename));
        test.ifError(err);
        test.done();
    });
};


exports['Render png'] = function (test) {
    var generator = new Generator({});
    test.ok(generator);
    var filename = tmpDir + '/testing-generate-png.png';
    generator.renderPng(filename, {
        text: {
            '#': 'foo'
        }
    }, function (err) {
        test.ok(fs.existsSync(filename));
        test.ifError(err);
        test.done();
    });
};

