#!/usr/bin/env node

/**
 * Send report.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const path = require('path')
const apeTasking = require('ape-tasking')
const apeReporting = require('ape-reporting')

apeTasking.runTasks([
  () => apeReporting.sendToCodeclimate(basedir + '/coverage/lcov.info')
], true)
