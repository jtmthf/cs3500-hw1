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
      } else if (/[A-Z)(a-z]/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 1:
      if (/[0-9]/.test(char)) {
        state = 9;
      } else {
        state = -1;
      }
      break;
    case 2:
      if (/\./.test(char)) {
        state = 16;
      } else if (/[01]/.test(char)) {
        state = 2;
      } else if (/B/.test(char)) {
        state = 10;
      } else if (/H/.test(char)) {
        state = 32;
      } else if (/[A-F]/.test(char)) {
        state = 33;
      } else if (/[2-9]/.test(char)) {
        state = 3;
      } else {
        state = -1;
      }
      break;
    case 3:
      if (/[0-9]/.test(char)) {
        state = 3;
      } else if (/\./.test(char)) {
        state = 16;
      } else if (/H/.test(char)) {
        state = 32;
      } else if (/[A-F]/.test(char)) {
        state = 33;
      } else {
        state = -1;
      }
      break;
    case 4:
      if (/H/.test(char)) {
        state = 17;
      } else if (/[0-9]/.test(char)) {
        state = 11;
      } else if (/[A-F]/.test(char)) {
        state = 4;
      } else if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 5:
      if (/h/.test(char)) {
        state = 12;
      } else if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 6:
      if (/l/.test(char)) {
        state = 13;
      } else if (/n/.test(char)) {
        state = 14;
      } else if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 7:
      if (/r/.test(char)) {
        state = 15;
      } else if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 8:
      if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 9:
      if (/[0-9]/.test(char)) {
        state = 9;
      } else if (/\./.test(char)) {
        state = 16;
      } else {
        state = -1;
      }
      break;
    case 10:
      if (/[0-9A-F]/.test(char)) {
        state = 33;
      } else if (/H/.test(char)) {
        state = 32;
      } else {
        state = -1;
      }
      break;
    case 11:
      if (/[0-9A-F]/.test(char)) {
        state = 11;
      } else if (/H/.test(char)) {
        state = 17;
      } else if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 12:
      if (/i/.test(char)) {
        state = 18;
      } else if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 13:
      if (/s/.test(char)) {
        state = 19;
      } else if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 14:
      if (/d/.test(char)) {
        state = 20;
      } else if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 15:
      if (/i/.test(char)) {
        state = 21;
      } else if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 16:
      if (/[0-9]/.test(char)) {
        state = 24;
      } else {
        state = -1;
      }
      break;
    case 17:
      if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 18:
      if (/l/.test(char)) {
        state = 25;
      } else if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 19:
      if (/e/.test(char)) {
        state = 26;
      } else if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 20:
      if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 21:
      if (/n/.test(char)) {
        state = 22;
      } else if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 22:
      if (/t/.test(char)) {
        state = 23;
      } else if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 23:
      if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 24:
      if (/[0-9]/.test(char)) {
        state = 24;
      } else if (/E/.test(char)) {
        state = 28;
      } else {
        state = -1;
      }
      break;
    case 25:
      if (/e/.test(char)) {
        state = 27;
      } else if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 26:
      if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 27:
      if (/\w/.test(char)) {
        state = 8;
      } else {
        state = -1;
      }
      break;
    case 28:
      if (/[\+\-]/.test(char)) {
        state = 29;
      } else if (/0/.test(char)) {
        state = 30;
      } else if (/[1-9]/.test(char)) {
        state = 31;
      } else {
        state = -1;
      }
      break;
    case 29:
      if (/0/.test(char)) {
        state = 30;
      } else if (/[1-9]/.test(char)) {
        state = 31;
      } else {
        state = -1;
      }
      break;
    case 30:
      if (/0/.test(char)) {
        state = 30;
      } else if (/[1-9]/.test(char)) {
        state = 31;
      } else {
        state = -1;
      }
      break;
    case 31:
      if (/[0-9]/.test(char)) {
        state = 31;
      } else {
        state = -1;
      }
      break;
    case 32:
      state = -1;
      break;
    case 33:
      if (/[0-9A-F]/.test(char)) {
        state = 32;
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
