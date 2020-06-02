/**
 * Test case for bannerGenerator.
 * Runs with mocha.
 */

const BannerGenerator = require('../lib/generators/banner_generator.js')
const fs = require('fs')
const assert = require('assert')

const mkdirp = require('mkdirp')

let tmpDir = __dirname + '/../tmp'

describe('banner generator', function () {
  this.timeout(8000)
  before(async () => {
    await mkdirp(tmpDir)

  })

  after(async () => {

  })

  it('Banner generator', async () => {
    let generator = new BannerGenerator({
      color: 'a',
      shape: 'a'
    })
    assert.ok(generator)
    await generator.generate(tmpDir + '/testing-banner.svg')
    await generator.generate(tmpDir + '/testing-banner.png')
  })

})
/* global describe, before, after, it */