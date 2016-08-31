# ctx-identity

An example of a canvas transform which doesn't alter the canvas at all (it's the identity transform). Useful as boilerplate for making real canvas transforms which do alter the canvas.

<!-- VDOC.badges travis; standard; npm; coveralls -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
[![Build Status](https://travis-ci.org/vigour-io/ctx-identity.svg?branch=master)](https://travis-ci.org/vigour-io/ctx-identity)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/ctx-identity.svg)](https://badge.fury.io/js/ctx-identity)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/ctx-identity/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/ctx-identity?branch=master)

<!-- VDOC END -->

<!-- VDOC.jsdoc cIdentity -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var transform = cIdentity()
- **returns** (*function*) transform - A function that accepts a canvas context and returns it as-is

<!-- VDOC END -->

## Examples

#### javascript (browser)
```javascript
const cIdentity = require('ctx-identity')

var canvas = document.getElementById('aCanvas')

cIdentity()(ctx, function (err, newCanvas) {
  var ctx = newCanvas.getContext('2d')
  ...
})
```

#### Node.js
```javascript
const cIdentity = require('ctx-identity')

var Canvas = require('canvas')
var canvas = new Canvas()

cIdentity()(canvas, function (err, newCanvas) {
  var ctx = newCanvas.getContext('2d')
  ...
})
```