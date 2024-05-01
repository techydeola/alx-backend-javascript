const calculateNumber = require('./2-calcul_chai.js');
const chai = require('chai');
const expect = chai.expect;

describe('AddTest', function() {
  it('check equality', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  })
});

describe('SubtractTest', function() {
  it('check equality', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
});

describe('DivideTest', function() {
  it('check equality', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
