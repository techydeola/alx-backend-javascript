const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('CalculateNumberTest', function () {
  it('should return 4', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
