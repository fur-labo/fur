/**
 * Test case for graphic.
 * Runs with nodeunit.
 */

var Graphic = require('../lib/drawing/graphics/graphic.js');

exports['Graphic'] = function (test) {
    var graphic = new Graphic({});
    test.ok(graphic);
    test.done();
};
exports['Get svg'] = function (test) {
    var graphic = new Graphic({});
    test.ok(graphic.toSvgXml());
    test.done();
};
exports['Define.'] = function (test) {
    var Defined = Graphic.define({'foo': 'bar'});
    test.ok(Defined);
    var defined = new Defined({});
    test.ok(defined);
    test.ok(defined.foo, 'bar');
    test.done();
};

