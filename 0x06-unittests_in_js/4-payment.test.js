const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('User', function() {
  describe('payFees', function() {
    it('should calculate Utils.calculateNumber with the correct arguments', function() {
      sinon.spy(console, 'log');
      sinon.stub(Utils, 'calculateNumber').returns(10);

      sendPaymentRequestToApi(100, 20);

      expect(Utils.calculateNumber.calledOnceWith('SUM', 100, 20)).to.be.true;
      expect(console.log.calledOnceWith('The total is: 10')).to.be.true;

      Utils.calculateNumber.restore();
      console.log.restore();
    });
  });
});
