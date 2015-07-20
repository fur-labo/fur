/**
 * Test case for hashCode.
 * Runs with nodeunit.
 */

var hashCode = require('../lib/util/hash/hash_code.js');

exports['Hash code'] = function (test) {
    test.equal(typeof(hashCode('foo')), 'number');
    test.ok(!isNaN(hashCode('foo')));
    test.ok(hashCode('foo'));
    test.done();
};

