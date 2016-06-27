/**
 * Test case for faviconGenerator.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')
const co = require('co')

const FaviconGenerator = require('../lib/generators/favicon_generator.js')
const fs = require('fs')
const mkdirp = require('mkdirp')

const tmpDir = `${__dirname}/../tmp`

describe('favicon generator', function () {
  before(() => co(function * () {
    mkdirp.sync(tmpDir)
  }))

  after(() => co(function * () {
  }))

  it('Favicon generator', () => co(function * () {
    let generator = new FaviconGenerator({})
    console.log(generator)
    assert.ok(generator)
    {
      let filename = tmpDir + '/testing-favicon.svg'
      yield generator.generate(filename)
      assert.ok(fs.existsSync(filename))
    }
    {
      let filename = tmpDir + '/testing-favicon.png'
      yield generator.generate(filename)
      assert.ok(fs.existsSync(filename))
    }
  }))
})

/* global describe, before, after, it */
