/**
 * Test case for fur.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')


const Fur = require('../lib/fur.js')
const fs = require('fs')
const mkdirp = require('mkdirp')

const tmpDir = __dirname + '/../tmp'

describe('fur', function () {
  this.timeout(8000)

  before(async () => {
    mkdirp.sync(tmpDir)
  })

  after(async () => {

  })

  it('Generate favicon', async () => {
    let fur = new Fur({})
    let filename = tmpDir + '/testing-fur-favicon.svg'
    await fur.favicon(filename)
    assert.ok(fs.existsSync(filename))
  })

  it('Generate banner', async () => {
    let fur = new Fur({})
    let filename = tmpDir + '/testing-fur-banner.svg'
    await fur.banner(filename)
    assert.ok(fs.existsSync(filename))
  })
})

/* global describe, before, after, it */