#!/usr/bin/env node

/**
 * Build this project.
 */

"use strict";

process.chdir(__dirname + '/..');

var mkdirp = require('mkdirp'),
    async = require('async'),
    filecopy = require('filecopy'),
    apeTasking = require('ape-tasking'),
    coz = require('coz');


apeTasking.runTasks('build', [
    function renderBud(callback) {
        coz.render([
            '.*.bud',
            'lib/.*.bud',
            'test/.*.bud'
        ], callback);
    },
    function collectFonts(callback) {
        var dest = 'docs/assets/fonts';
        async.series([
            function (callback) {
                mkdirp(dest, callback);
            },
            function (callback) {
                filecopy('third_party/**/+(*.ttf|*.svg|*.eot)', dest, callback);
            }
        ], callback);
    }
], true);

