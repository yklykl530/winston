/*
 * console.js: Transport for outputting to the console
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 *
 */

const util = require('util');
const { LEVEL, MESSAGE } = require('triple-beam');
const TransportStream = require('winston-transport');
var {setImmediate} = require('timers');
//
// ### function Console (options)
// #### @options {Object} Options for this instance.
// Constructor function for the Console transport object responsible
// for persisting log messages and metadata to a terminal or TTY.
//
var BrowserConsole = module.exports = function (options) {
  options = options || {};
  TransportStream.call(this, options);
};

//
// Inherit from `winston.Transport`.
//
util.inherits(BrowserConsole, TransportStream);

//
// Expose the name of this Transport on the prototype
//
BrowserConsole.prototype.name = 'browser-console';

//
// ### function log (info)
// #### @info {Object} **Optional** Additional metadata to attach
// Core logging method exposed to Winston.
//
BrowserConsole.prototype.log = function (info, callback) {
  var self = this;
  setImmediate(function () {
    self.emit('logged', info);
  });

  console.log('Browser winston console: ' + info[MESSAGE], info);
  if (callback) { callback(); } // eslint-disable-line
};

