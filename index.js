'use strict'

var greatest = require('greatest')
var precision = require('precision')

module.exports = function dollars (value, decimals) {
  decimals = decimals != null ? decimals : greatest(precision(value), 2)
  return '$' + value.toFixed(decimals)
}
