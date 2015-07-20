#!/usr/bin/env node

/**
 * @file Render examples.
 */

"use strict";

var fur = require('../../../lib'),
    stringcase = require('stringcase'),
    path = require('path'),
    async = require('async');


var basedir = path.resolve(__dirname, '../../..');

async.series([
    function renderBannerImages(callback) {
        var bannerExamples = require(basedir + '/docs/examples/.banner-example.json');
        async.eachSeries(['svg', 'png'], function (format, callback) {
            var extname = '.' + format;
            async.each(bannerExamples, function (config, callback) {
                config.format = format;
                var filename = path.resolve(
                    basedir,
                    'docs/examples/images/example-' + stringcase.lowercase(config.text) + '-banner' + extname
                );
                fur.banner(filename, config, callback);
            }, callback);
        }, callback);
    }
], function (err) {
    if (err) {
        console.error(err);
    }
});

