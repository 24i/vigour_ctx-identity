'use strict'

/**
 * @id cIdentity
 * @function cIdentity
 * @returns transform {function} - A function that accepts a canvas and returns it as-is
 */
module.exports = exports = function cIdentity () {
  return function transform (canvas, cb) {
    cb(null, canvas)
  }
}
