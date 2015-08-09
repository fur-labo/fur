#!/usr/bin/env node

/**
 * @file Render files.
 */

"use strict";

var fur = require('../lib'),
    coz = require('coz'),
    stringcase = require('stringcase'),
    path = require('path'),
    async = require('async');


var basedir = path.resolve(__dirname, '..');

async.series([
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
    },
    function renderBuds(callback) {
        coz.render([
            "+(docs|lib|test)/**/.*.bud"
        ], callback);
    }
], function (err) {
    if (err) {
        console.error(err);
    }
});

