/**
 * Test case for generator.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')
const co = require('co')

const Generator = require('../lib/generators/generator.js')
const fs = require('fs')
const mkdirp = require('mkdirp')

let tmpDir = __dirname + '/../tmp'

describe('generator', function () {
  this.timeout(14000)
  before(() => co(function * () {
    mkdirp.sync(tmpDir)
  }))

  after(() => co(function * () {

  }))

  it('Render svg', () => co(function * () {
    let generator = new Generator({})
    assert.ok(generator)
    let filename = tmpDir + '/testing-generate-svg.svg'
    yield generator.renderSvg(filename, {
      text: {
        '#': 'foo'
      }
    })
    assert.ok(fs.existsSync(filename))
  }))

  it('Render png', () => co(function * () {
    let generator = new Generator({})
    assert.ok(generator)
    let filename = tmpDir + '/testing-generate-png.png'
    yield generator.renderPng(filename, {
      text: {
        '#': 'foo'
      }
    })
  }))
})

/* global describe, before, after, it */

