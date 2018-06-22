var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it should add 1 & 4 together', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5)
  })

  it('it should subract 4 from 7', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  })

  it('it should multiply 3 & 5 together', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
  })

  it('it should divide 21 by 7', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  })

  it('it should have a running total of 200', function() {
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.numberClick(0);
    assert.equal(calculator.runningTotal, 200)
  })

  it('it should add 1 and  a running total of 200', function() {
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.numberClick(0);
    assert.equal(calculator.runningTotal, 200)
  })

  it('it should add 6 and 4, subtract 2, multiply by 3 and divide by 12 giving a running total of 2', function() {
    calculator.numberClick(6);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('/');
    calculator.numberClick(12);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 2)
  })

  it('it should clear the runningTotal after numbers have been inputted', function() {
    calculator.numberClick(3);
    calculator.operatorClick('/');
    calculator.numberClick(12);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0)
  })

});
