'use strict';

require('babel-polyfill');
var readline = require('readline');
var lexer = require('./lexer.js');

function lex() {
  return new Promise(function (resolve, reject) {
    //eslint-disable-line no-unused-vars
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    var index = 0;
    var total = undefined;

    rl.on('line', function (input) {
      if (!total) {
        total = parseInt(input);
      } else if (index < total) {
        console.log(++index + ': ' + lexer(input)); //eslint-disable-line no-console
      }
      if (index === total) {
        rl.close();
        resolve();
      }
    });
  });
}

module.exports = function () {
  lex().then(function () {});
}();

