const stateMap = require('./states.js');


module.exports = (word) => {

  let state = 0;
  for (const char of word) {

    switch (state) {

    case 0:
      if (/[\+\-]/.test(char)) {
        state = 1;
      } else if (/[01]/.test(char)) {
        state = 2;
      } else if (/[2-9]/.test(char)) {
        state = 3;
      } else if (/[A-F]/.test(char)) {
        state = 4;
      } else if (/w/.test(char)) {
        state = 5;
      } else if (/e/.test(char)) {
        state = 6;
      } else if (/p/.test(char)) {
        state = 7;
      } else if (/[A-z]/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    default:
      state = -1;
    }
  }

  return stateMap[state] ? stateMap[state] : 'Invalid!';
};
