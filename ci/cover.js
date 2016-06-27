#!/usr/bin/env node

/**
 * Take coverage.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeCovering = require('ape-covering')

apeTasking.runTasks('cover', [
  () => apeCovering.measureCoverage(
    '_mocha', [ 'test/*_test.js' ], {
      dir: 'coverage',
      timeout: 18000
    })
], true)
