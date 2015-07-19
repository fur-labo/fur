/**
 * Test case for drawBanner.
 * Runs with nodeunit.
 */

var drawBanner = require('../lib/drawing/draw_banner.js'),
    SizeStrut = require('../lib/struct/size_struct'),
    FontStrut = require('../lib/struct/font_struct'),
    path = require('path');


exports['Draw banner'] = function (test) {
    drawBanner({
        colors: ['#38E'],
        font: new FontStrut({
            src: path.resolve(__dirname, '../docs/assets/fonts/Anonymous Pro B.ttf'),
            size: 28
        }),
        size: new SizeStrut({})
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

