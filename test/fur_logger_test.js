/**
 * Test case for furLogger.
 * Runs with nodeunit.
 */

var FurLogger = require('../lib/logging/fur_logger.js');

exports['Fur logger'] = function (test) {
    var logger = new FurLogger();
    logger.logImageGenerated('foo');
    test.done();
};

