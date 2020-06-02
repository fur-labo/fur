/**
 * Test for fur bin.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')


const fs = require('fs')
const furBin = require.resolve('../bin/fur')
const execcli = require('execcli')
const mkdirp = require('mkdirp')

let tmpDir = __dirname + '/../tmp'

describe('bin', function () {
  this.timeout(24000)
  before(async () => {
    await mkdirp(tmpDir)
  })

  after(async () => {
  })

  it('Generate favicon', async () => {
    let filename = tmpDir + '/testing-bin-favicon.png'
    await execcli(furBin, [ 'favicon', filename ])
    assert.ok(fs.existsSync(filename))
  })

  it('Generate banner', async () => {
    let filename = tmpDir + '/testing-bin-banner.png'
    await execcli(furBin, [ 'banner', filename ])
    assert.ok(fs.existsSync(filename))
  })
})

/* global describe, before, after, it */