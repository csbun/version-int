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

export function parse(versionStr, digitLength) {
  const versionArr = `${versionStr}`.split('.')
    .map(str => lefPadZero(str, digitLength));
  return tryParseInt(versionArr.join(''));
}


export function setDigit(digitLength) {
  digit = typeof digitLength === 'number' && digitLength > 0 ? digitLength : 1;
}
