#!/usr/bin/env node

'use strict'

process.chdir(`${__dirname}/..`)

const path = require('path')
const async = require('async')
const coz = require('coz')
const apiguide = require('apiguide')

async.series([
  function docApiguide (callback) {
    apiguide([
      'lib/**/*.js',
      'README.md'
    ], {
      verbose: true,
      tutorials: "doc/tutorial/.jsdoc_precompiled",
      destination: "doc/apiguide",
      templates: {
        color: '#ff9100',
        systemName: 'fur',
        favicon: 'doc/assets/images/fur-favicon.png',
        copyright: "okunishitaka.com Copyright © 2015"
      }
    }, callback)
  },
  () => coz.render([
    'doc/readme/.*.bud'
  ])
], true)
