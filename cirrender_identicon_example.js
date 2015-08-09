#!/usr/bin/env node

/**
 * @file Render identicon examples.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    fur = require('../lib'),
    coz = require('coz'),
    stringcase = require('stringcase'),
    path = require('path'),
    async = require('async');


apeTasking.runTasks('render-identicon-example', [
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
        var destDir = 'docs/examples/images/identicon/';
        async.eachSeries(identifiers, function (identifier, callback) {
            async.eachSeries(['svg'], function (format, callback) {
                var extname = '.' + format;
                var filename = path.resolve(
                    destDir,
                    'example-identicon-' + (index++) + extname
                );
                fur.identicon(filename, {
                    identifier: identifier,
                    format: format
                }, callback);
            }, callback);
        }, callback);
    },
    function renderBud(callback) {
        coz.render('docs/examples/.*.bud', callback);
    }
], true);

