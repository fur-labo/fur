/**
 * Test case for fur.
 * Runs with nodeunit.
 */

var Fur = require('../lib/fur.js'),
    path = require('path');

var tmpDir = path.resolve(__dirname, '../tmp');

exports['Generate a banner.'] = function (test) {
    new Fur().banner(tmpDir + '/fur-testing-banner.svg', {
        color: 'e',
        font: 'd',
        text: 'Bar'
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};


exports['Generate a favicon.'] = function (test) {
    new Fur().favicon(tmpDir + '/fur-testing-favicon.svg', {
        color: 'k',
        font: 'g',
        text: 'E'
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

