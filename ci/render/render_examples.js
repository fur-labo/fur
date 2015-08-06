#!/usr/bin/env node

/**
 * @file Render examples.
 */

"use strict";

var fur = require('../../lib'),
    stringcase = require('stringcase'),
    path = require('path'),
    async = require('async');


var basedir = path.resolve(__dirname, '../..');

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
    },
    function renderFaviconImages(callback) {
        var faviconExamples = require(basedir + '/docs/examples/.favicon-example.json');
        async.eachSeries(['svg', 'png'], function (format, callback) {
            var extname = '.' + format;
            async.each(faviconExamples, function (config, callback) {
                config.format = format;
                var filename = path.resolve(
                    basedir,
                    'docs/examples/images/example-' + stringcase.lowercase(config.text) + '-favicon' + extname
                );
                fur.favicon(filename, config, callback);
            }, callback);
        }, callback);
    },
    function renderIdenticonImages(callback) {
        var identifiers = [];
        for (var i = 0; i < 50; i++) {
            var identifier = Math.random().toString(36).substring(7);
            if (!identifier) {
                continue;
            }
            identifiers.push(identifier);
        }
        var index = 0;
        async.eachSeries(identifiers, function (identifier, callback) {
            async.eachSeries(['svg', 'png'], function (format, callback) {
                var extname = '.' + format;
                var filename = path.resolve(
                    basedir,
                    'docs/examples/images/example-identicon-' + (index++) + extname
                );
                fur.identicon(filename, {
                    identifier: identifier,
                    format: format
                }, callback);
            }, callback);
        }, callback);
    }
], function (err) {
    if (err) {
        console.error(err);
    }
});

