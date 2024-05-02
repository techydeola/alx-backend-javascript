const sinon = require('sinon');
const Utils = require('./utils.js');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function() {
  it('shoud correctly log the payment request', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    assert(spy.calledOnce);
    spy.restore();
  });
});
