'use strict'

const test = require('tape')
const cIdentity = require('../')

test('ctx-identity', function (t) {
  var Canvas = require('canvas')
  var canvas = new Canvas()
  var ctx = canvas.getContext('2d')

  cIdentity()(canvas, function (err, newCanvas) {
    if (err) {
      t.fail(err)
    }
    var newCtx = newCanvas.getContext('2d')
    t.deepEqual(ctx, newCtx, 'context is unchanged')
    t.end()
  })
})
