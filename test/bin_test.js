/**
 * Test for fur bin.
 * Runs with nodeunit.
 */

var fs = require('fs'),
    furBin = require.resolve('../bin/fur'),
    execcli = require('execcli'),
    mkdirp = require('mkdirp');

var tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Generate favicon'] = function (test) {
    var filename = tmpDir + '/testing-bin-favicon.png';
    execcli(furBin, ['favicon', filename], function (err) {
        test.ifError(err);
        test.ok(fs.existsSync(filename));
        test.done();
    });
};

exports['Generate banner'] = function (test) {
    var filename = tmpDir + '/testing-bin-banner.png';
    execcli(furBin, ['banner', filename], function (err) {
        test.ifError(err);
        test.ok(fs.existsSync(filename));
        test.done();
    });
};
