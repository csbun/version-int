const assert = require('assert');
const versionInt = require('./');


describe('version-int', () => {
  it('#parse()', () => {
    assert.equal(versionInt.parse('1.1.1'), 1001001);
    assert.equal(versionInt.parse('1.22.333'), 1022333);
    assert.equal(versionInt.parse('1.22.333.4567'), 1022333456);
  });

  it('#parse() with digit', () => {
    assert.equal(versionInt.parse('1.1.1', 4), 100010001);
    assert.equal(versionInt.parse('1.22.333', 4), 100220333);
    assert.equal(versionInt.parse('1.22.333.4567', 4), 1002203334567);
  });

  it('#setDigit()', () => {
    assert.equal(versionInt.parse('1.1.1'), 1001001);
    versionInt.setDigit(4);
    assert.equal(versionInt.parse('1.22.333.4567'), 1002203334567);
    versionInt.setDigit(-1);
    assert.equal(versionInt.parse('12.123.1234'), 111);
    versionInt.setDigit(3);
    assert.equal(versionInt.parse('1.1.1'), 1001001);
    versionInt.setDigit('string');
    assert.equal(versionInt.parse('12.123.1234'), 111);
  });
});
