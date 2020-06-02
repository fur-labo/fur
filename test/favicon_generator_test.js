/**
 * Test case for faviconGenerator.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')


const FaviconGenerator = require('../lib/generators/favicon_generator.js')
const fs = require('fs')
const mkdirp = require('mkdirp')

const tmpDir = `${__dirname}/../tmp`

describe('favicon generator', function () {
  this.timeout(8000)
  before(async () => {
    await mkdirp(tmpDir)
  })

  after(async () => {
  })

  it('Favicon generator', async () => {
    let generator = new FaviconGenerator({})
    console.log(generator)
    assert.ok(generator)
    {
      let filename = tmpDir + '/testing-favicon.svg'
      await generator.generate(filename)
      assert.ok(fs.existsSync(filename))
    }
    {
      let filename = tmpDir + '/testing-favicon.png'
      await generator.generate(filename)
      assert.ok(fs.existsSync(filename))
    }
  })
})

/* global describe, before, after, it */
