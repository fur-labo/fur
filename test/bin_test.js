/**
 * Test for fur bin.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')
const co = require('co')

const fs = require('fs')
const furBin = require.resolve('../bin/fur')
const execcli = require('execcli')
const mkdirp = require('mkdirp')

let tmpDir = __dirname + '/../tmp'

describe('bin', function () {
  this.timeout(24000)
  before(() => co(function * () {
    mkdirp.sync(tmpDir)
  }))

  after(() => co(function * () {
  }))

  it('Generate favicon', () => co(function * () {
    let filename = tmpDir + '/testing-bin-favicon.png'
    yield execcli(furBin, [ 'favicon', filename ])
    assert.ok(fs.existsSync(filename))
  }))

  it('Generate banner', () => co(function * () {
    let filename = tmpDir + '/testing-bin-banner.png'
    yield execcli(furBin, [ 'banner', filename ])
    assert.ok(fs.existsSync(filename))
  }))
})

/* global describe, before, after, it */