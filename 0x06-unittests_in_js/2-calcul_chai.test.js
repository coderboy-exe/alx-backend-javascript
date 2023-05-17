const chai = require('chai');
const expect = chai.expect;

const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  it('checks roundedness', function() {
    expect(calculateNumber('SUM', 2.2, 5.8)).to.deep.equal(calculateNumber('SUM', 2, 6));
  });
  it('checks addition', function() {
    expect(calculateNumber('SUM', 2.2, 5.8)).to.deep.equal(8);
  });
  it('checks subtraction', function() {
    expect(calculateNumber('SUBTRACT', 8.2, 5.8)).to.deep.equal(2);
  });
  it('checks negative subtraction', function() {
    expect(calculateNumber('SUBTRACT', 2.2, 5.8)).to.deep.equal(-4);
  });
  it('checks division', function() {
    expect(calculateNumber('DIVIDE', 20.2, 5.1)).to.deep.equal(4);
  });
  it('checks division by 0', function() {
    expect(calculateNumber('DIVIDE', 2.2, 0)).to.deep.equal('Error');
  });
});
