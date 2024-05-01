const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('AddTest', function() {
  it('check equality', function() {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  })
});

describe('SubtractTest', function() {
  it('check equality', function() {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
});

describe('DivideTest', function() {
  it('check equality', function() {
    assert.equal(calculateNumber('DIVIDE', 1, 3), 0);
    assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0);
    assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0);
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0);
  });
});
