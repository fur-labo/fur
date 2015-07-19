/**
 * Test case for drawBanner.
 * Runs with nodeunit.
 */

var drawBanner = require('../lib/drawing/draw_banner.js'),
    path = require('path');

var font01 = path.resolve(__dirname, '../docs/assets/fonts/Anonymous Pro B.ttf');

exports['Draw banner'] = function (test) {
    drawBanner({
        colors: ['#38E'],
        font: font01
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

