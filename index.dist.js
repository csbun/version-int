'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.setDigit = setDigit;
var digit = 3;

function tryParseInt(str) {
  try {
    return parseInt(str, 10);
  } catch (e) {
    console.log(e);
    // DO NOTHING
  }
  return 0;
}

function lefPadZero(originStr, digitLength) {
  var str = '' + tryParseInt(originStr);
  var realDigit = digitLength || digit;
  var padLength = realDigit - str.length;
  if (padLength > 0) {
    var pad = '';
    while (pad.length < padLength) {
      pad += '0';
    }
    return pad + str;
  }
  return str.substr(0, realDigit);
}

function parse(versionStr, digitLength) {
  var versionArr = ('' + versionStr).split('.').map(function (str) {
    return lefPadZero(str, digitLength);
  });
  return tryParseInt(versionArr.join(''));
}

function setDigit(digitLength) {
  digit = typeof digitLength === 'number' && digitLength > 0 ? digitLength : 1;
}
