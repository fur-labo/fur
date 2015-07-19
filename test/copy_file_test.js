/**
 * Test case for copyFile.
 * Runs with nodeunit.
 */

var copyFile = require('../lib/generating/copy_file.js'),
    path = require('path'),
    mkdirp = require('mkdirp');

var tmpDir = path.resolve(__dirname, '../tmp');
mkdirp.sync(tmpDir);

exports['Copy file'] = function (test) {
    var src = String(__filename),
        dest = tmpDir + '/tmp-copy-file';
    copyFile(src, dest, function (err) {
        test.ifError(err);
        test.done();
    });

};

