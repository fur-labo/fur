/**
 * Test case for generator.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')


const Generator = require('../lib/generators/generator.js')
const fs = require('fs')
const mkdirp = require('mkdirp')

let tmpDir = __dirname + '/../tmp'

describe('generator', function () {
  this.timeout(14000)
  before(async () => {
    mkdirp.sync(tmpDir)
  })

  after(async () => {

  })

  it('Render svg', async () => {
    let generator = new Generator({})
    assert.ok(generator)
    let filename = tmpDir + '/testing-generate-svg.svg'
    await generator.renderSvg(filename, {
      text: {
        '#': 'foo'
      }
    })
    assert.ok(fs.existsSync(filename))
  })

  it('Render png', async () => {
    let generator = new Generator({})
    assert.ok(generator)
    let filename = tmpDir + '/testing-generate-png.png'
    await generator.renderPng(filename, {
      text: {
        '#': 'foo'
      }
    })
  })
})

/* global describe, before, after, it */

