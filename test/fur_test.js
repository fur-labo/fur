/**
 * Test case for fur.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')
const co = require('co')

const Fur = require('../lib/fur.js')
const fs = require('fs')
const mkdirp = require('mkdirp')

const tmpDir = __dirname + '/../tmp'

describe('fur', function () {
  before(() => co(function * () {
    mkdirp.sync(tmpDir)
  }))

  after(() => co(function * () {

  }))

  it('Generate favicon', () => co(function * () {
    let fur = new Fur({})
    let filename = tmpDir + '/testing-fur-favicon.svg'
    yield fur.favicon(filename)
    assert.ok(fs.existsSync(filename))
  }))

  it('Generate banner', () => co(function * () {
    let fur = new Fur({})
    let filename = tmpDir + '/testing-fur-banner.svg'
    yield fur.banner(filename)
    assert.ok(fs.existsSync(filename))
  }))
})

/* global describe, before, after, it */