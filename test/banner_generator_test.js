/**
 * Test case for bannerGenerator.
 * Runs with mocha.
 */

const BannerGenerator = require('../lib/generators/banner_generator.js')
const fs = require('fs')
const assert = require('assert')
const co = require('co')
const mkdirp = require('mkdirp')

let tmpDir = __dirname + '/../tmp'

before(() => co(function * () {
  mkdirp.sync(tmpDir)

}))

after(() => co(function * () {

}))

it('Banner generator', () => co(function * () {
  let generator = new BannerGenerator({
    color: 'a',
    shape: 'a'
  })
  assert.ok(generator)
  let filename = tmpDir + '/testing-banner.svg'
  yield generator.generate(filename)
}))

/* global describe, before, after, it */