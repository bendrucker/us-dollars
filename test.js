'use strict'

var test = require('tape')
var dollars = require('./')

test(function (t) {
  t.equal(dollars(5), '$5.00')
  t.equal(dollars(5.1234), '$5.1234')
  t.equal(dollars(5.123, 0), '$5')
  t.end()
})
