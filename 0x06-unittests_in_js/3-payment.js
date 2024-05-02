const Utils = require('./utils.js');

sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
