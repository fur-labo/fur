/**
 * Test case for fur.
 * Runs with nodeunit.
 */

var Fur = require('../lib/fur.js'),
    path = require('path');

var tmpDir = path.resolve(__dirname, '../tmp');

exports['Create a logo.'] = function (test) {
    new Fur().logo(tmpDir + '/fur-testing-logo.svg', {}, function (err) {
        test.ifError(err);
        test.done();
    });
};

