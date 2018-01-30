

const winston = require('../winston.js');

Object.defineProperty(winston.transports, 'BrowserConsole', {
    configurable: true,
    enumerable: true,
    get: function () {
      return require('./transports/browser-console');
    }
});

window.winston = winston;