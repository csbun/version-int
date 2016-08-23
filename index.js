/**
 * # version-int
 * parse a version string to int
 * @module version-int
 */
let digit = 3;

function tryParseInt(str) {
  try {
    return parseInt(str, 10);
  } catch (e) {
    // DO NOTHING
  }
  return 0;
}

function lefPadZero(originStr, digitLength) {
  const str = `${tryParseInt(originStr)}`;
  const realDigit = digitLength || digit;
  const padLength = realDigit - str.length;
  if (padLength > 0) {
    let pad = '';
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
 * @param  {number} [digitLength=3] how long each sub-version is
 * @return {number}             version number
 * @example
 * versionInt.parse('1.1.1');    // 1001001
 * versionInt.parse('1.1.1', 1); // 111
 * versionInt.parse('1.1.1', 2); // 10101
 * versionInt.parse('1.2.3456', 3); // 1001345
 */
export function parse(versionStr, digitLength) {
  const versionArr = `${versionStr}`.split('.')
    .map(str => lefPadZero(str, digitLength));
  return tryParseInt(versionArr.join(''));
}

/**
 * set/update default digitLength
 * @param {number} [digitLength=3] how long each sub-version is
 * @example
 * versionInt.parse('1.1.1'); // 1001001
 * versionInt.setDigit(1);
 * versionInt.parse('1.1.1'); // 111
 */
export function setDigit(digitLength) {
  digit = typeof digitLength === 'number' && digitLength > 0 ? digitLength : 3;
}
