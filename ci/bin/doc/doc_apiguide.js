#!/usr/bin/env node

"use strict";

var path = require('path');

var basedir = path.resolve(__dirname, '../../..');

process.chdir(basedir);

var apiguide = require('apiguide');
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
}, function (err) {
    if (err) {
        console.error(err);
    }
});
