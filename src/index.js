require('babel-polyfill');
const readline = require('readline');
const lexer = require('./lexer.js');

function lex() {
  return new Promise((resolve, reject) => { //eslint-disable-line no-unused-vars
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    let index = 0;
    let total;

    rl.on('line', (input) => {
      if(!total) {
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

module.exports = (() => {
  lex().then(() => {});
})();
