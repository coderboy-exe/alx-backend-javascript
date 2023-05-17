const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('checks roundedness', function() {
    assert.equal(calculateNumber('SUM', 2.2, 5.8), calculateNumber('SUM', 2, 6));
  });
  it('checks addition', function() {
    assert.equal(calculateNumber('SUM', 2.2, 5.8), 8);
  });
  it('checks subtraction', function() {
    assert.equal(calculateNumber('SUBTRACT', 8.2, 5.8), 2);
  });
  it('checks negative subtraction', function() {
    assert.equal(calculateNumber('SUBTRACT', 2.2, 5.8), -4);
  });
  it('checks division', function() {
    assert.equal(calculateNumber('DIVIDE', 20.2, 5.1), 4);
  });
  it('checks division by 0', function() {
    assert.equal(calculateNumber('DIVIDE', 2.2, 0), 'Error');
  });
});
