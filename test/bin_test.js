/**
 * Test for fur bin.
 */

"use strict";

var bin = require.resolve('../bin/fur'),
    childProcess = require('child_process');

exports['Do generate favicon.'] = function (test) {
    var fur = childProcess.spawn(bin, [
        'favicon',
        __dirname + '/..tmp/favicon-by-bin.svg'
    ], {
        stdio: [
            null,
            process.stdout,
            process.stderr
        ]
    });
    fur.on('exit', function (code) {
        test.equal(code, 0);
        test.done();
    });
};
