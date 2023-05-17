const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('User', function() {
  describe('payFees', function() {
    beforeEach('setuo test spy', function() {
      sinon.spy(console, 'log');
    });
    afterEach('restore spy', function() {
      console.log.restore();
    });
    if('should calculate Utils.calculateNumber with the correct arguments', function() {
      sendPaymentRequestToApi(100, 20);
      expect(console.log.calledOnceWith('The total is: 120')).to.be.true;
    });
    if('should calculate Utils.calculateNumber with the correct arguments', function() {
      sendPaymentRequestApi(10, 10);
      expect(console.log.calledOnceWith('The total is: 10')).to.be.true;
    });
  });
});
