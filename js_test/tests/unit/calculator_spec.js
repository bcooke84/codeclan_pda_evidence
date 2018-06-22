var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it should add 1 & 3 together', function(){
    calculator.previousTotal = 1;
    calculator.add(2);
    assert.equal(calculator.runningTotal, 3)
  })

  it('it should subract 3 from 7', function() {
    calculator.previousTotal = 7;
    calculator.subtract(3);
    assert.equal(calculator.runningTotal, 4)
  })

  it('it should multiply 2 & 3 together', function(){
    calculator.previousTotal = 2;
    calculator.multiply(3);
    assert.equal(calculator.runningTotal, 6)
  })

  it('it should divide 8 by 2', function() {
    calculator.previousTotal = 8;
    calculator.divide(2);
    assert.equal(calculator.runningTotal, 4)
  })

  it('it should have a running total of 200', function() {
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.numberClick(0);
    assert.equal(calculator.runningTotal, 200)
  })

});
