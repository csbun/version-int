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

/**
 * parse a version string into a number
 * @param  {string} versionStr  version string
 * @param  {number} [digitLength] how long each sub-version is, default: 3
 * @return {number}             version number
 * @example
 * versionint.parse('1.1.1');    // 1001001
 * versionint.parse('1.1.1', 1); // 111
 * versionint.parse('1.1.1', 2); // 10101
 * versionint.parse('1.2.3456', 3); // 1001345
 */
function parse(versionStr, digitLength) {
  var versionArr = ('' + versionStr).split('.').map(function (str) {
    return lefPadZero(str, digitLength);
  });
  return tryParseInt(versionArr.join(''));
}

/**
 * set/update default digitLength
 * @param {number} digitLength how long each sub-version is, default: 3
 * @example
 * versionint.parse('1.1.1'); // 1001001
 * versionint.setDigit(1);
 * versionint.parse('1.1.1'); // 111
 */
function setDigit(digitLength) {
  digit = typeof digitLength === 'number' && digitLength > 0 ? digitLength : 3;
}
