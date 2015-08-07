#!/usr/bin/env node

/**
 * Build this project.
 */

"use strict";

var path = require('path'),
    mkdirp = require('mkdirp'),
    async = require('async'),
    filecopy = require('filecopy'),
    apeTasking = require('ape-tasking'),
    coz = require('coz');

var basedir = path.resolve(__dirname, '..');

process.chdir(basedir);

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

