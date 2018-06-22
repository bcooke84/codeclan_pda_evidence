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

  

});
