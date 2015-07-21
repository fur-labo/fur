/**
 * Test case for identiconGraphic.
 * Runs with nodeunit.
 */

var IdenticonGraphic = require('../lib/drawing/graphics/identicon_graphic.js');

exports['Identicon graphic'] = function (test) {
    var data = new IdenticonGraphic().size({
        width: 128, height: 128
    }).toSvgData();
    test.ok(data);
    test.done();
};

