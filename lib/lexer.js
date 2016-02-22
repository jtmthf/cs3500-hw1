'use strict';

var stateMap = require('./states.js');

module.exports = function (word) {

  var state = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = word[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var char = _step.value;


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
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return stateMap[state] ? stateMap[state] : 'Invalid!';
};

