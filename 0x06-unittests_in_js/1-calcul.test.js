const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('AddTest', function() {
  it('check equality', function() {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  })
});

describe('SubtractTest', function() {
  it('check equality', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
});

describe('DivideTest', function() {
  it('check equality', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
