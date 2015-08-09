#!/usr/bin/env node

/**
 * @file Render favicon examples.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    fur = require('../lib'),
    coz = require('coz'),
    path = require('path'),
    stringcase = require('stringcase'),
    async = require('async');

apeTasking.runTasks('render-favicon-example', [
    function renderImages(callback) {
        var config = require('./configs/favicon-example-config.json');
        var destDir = 'docs/examples/images/favicon';
        async.eachSeries(['svg', 'png'], function (format, callback) {
            var extname = '.' + format;
            async.each(config, function (config, callback) {
                config.format = format;
                var name = stringcase.lowercase(config.text);
                var filename = path.resolve(destDir, ['example', name, 'favicon'].join('-') + extname);
                fur.favicon(filename, config, callback);
            }, callback);
        }, callback);
    },
    function renderBud(callback) {
        coz.render('docs/examples/.*.bud', callback);
    }
], true);
