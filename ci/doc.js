#!/usr/bin/env node

"use strict";

var path = require('path'),
    async = require('async'),
    coz = require('coz'),
    apiguide = require('apiguide');

var basedir = path.resolve(__dirname, '..');

process.chdir(basedir);

async.series([
    function docApiguide(callback) {
        apiguide([
            "lib/**/*.js",
            "README.md"
        ], {
            verbose: true,
            tutorials: "docs/tutorial/.jsdoc_precompiled",
            destination: "docs/apiguide",
            templates: {
                color: '#ff9100',
                systemName: 'fur',
                favicon: 'docs/assets/images/fur-favicon.png',
                copyright: "okunishitaka.com Copyright © 2015"
            }
        }, callback);
    },
    function docReadme(callback) {
        coz.render([
            'docs/readme/.*.bud'
        ], callback)
    }
], function (err) {
    if (err) {
        console.error(err);
    }
});
