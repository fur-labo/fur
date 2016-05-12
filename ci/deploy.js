#!/usr/bin/env node

/**
 * Deploy files.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeDeploying = require('ape-deploying')

apeTasking.runTasks('deploy', [
  () => apeDeploying.deployGhPages('doc', {})
], true)
