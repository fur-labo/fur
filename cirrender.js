#!/usr/bin/env node

/**
 * Render all.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    execcli = require('execcli');


apeTasking.runTasks('render', [
    function (callback) {
        execcli('./ci/render_banner_example.js', callback);
    },
    function (callback) {
        execcli('./ci/render_favicon_example.js', callback);
    },
    function (callback) {
        execcli('./ci/render_identicon_example.js', callback);
    }
], true);

