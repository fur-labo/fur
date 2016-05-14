#!/usr/bin/env node

'use strict'

process.chdir(`${__dirname}/..`)

const coz = require('coz')
const apeTasking = require('ape-tasking')
const apiguide = require('apiguide')

apeTasking.runTasks('doc', [
  () => apiguide([
    'lib/**/*.js',
    'README.md'
  ], {
    verbose: true,
    destination: 'doc/apiguide',
    templates: {
      color: '#ff9100',
      systemName: 'fur',
      favicon: 'doc/assets/images/fur-favicon.png',
      copyright: 'okunishitaka.com Copyright © 2015'
    }
  }),
  () => coz.render([
    'doc/guides/.*.bud'
  ])
], true)
