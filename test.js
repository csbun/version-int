const assert = require('assert');
const versionInt = require('./');


describe('version-int', () => {
  it('#parse(str)', () => {
    assert.equal(versionInt.parse('1.1.1'), 1001001);
    assert.equal(versionInt.parse('1.22.333'), 1022333);
    assert.equal(versionInt.parse('1.22.333.4567'), 1022333456);
  });

  it('#parse(str, digit)', () => {
    assert.equal(versionInt.parse('1.1.1', 4), 100010001);
    assert.equal(versionInt.parse('1.22.333', 4), 100220333);
    assert.equal(versionInt.parse('1.22.333.4567', 4), 1002203334567);
  });

  it('#setDigit(num)', () => {
    assert.equal(versionInt.parse('1.1.1'), 1001001);
    versionInt.setDigit(4);
    assert.equal(versionInt.parse('1.22.333.4567'), 1002203334567);
    versionInt.setDigit(-1);
    assert.equal(versionInt.parse('12.123.1234'), 12123123);
    versionInt.setDigit(1);
    assert.equal(versionInt.parse('1234.1.1'), 111);
    versionInt.setDigit('string');
    assert.equal(versionInt.parse('12.123.1234'), 12123123);
  });
});
