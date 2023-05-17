const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('checks roundedness', function() {
    assert.equal(calculateNumber(2.2, 5.8), calculateNumber(2, 6));
  });
  it('checks roundedness', function() {
    assert.equal(calculateNumber(2.2, 5.8), 8);
  });
});
