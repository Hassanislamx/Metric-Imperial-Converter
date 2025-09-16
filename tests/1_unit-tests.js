const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {

  // 1 - getNum valid inputs
  test('Whole number input', function() {
    assert.equal(convertHandler.getNum('32L'), 32);
  });

  // 2
  test('Decimal number input', function() {
    assert.equal(convertHandler.getNum('3.1mi'), 3.1);
  });

  // 3
  test('Fractional input', function() {
    assert.equal(convertHandler.getNum('1/2km'), 0.5);
  });

  // 4
  test('Fractional input with a decimal', function() {
    assert.equal(convertHandler.getNum('2.5/5kg'), 0.5);
  });

  // 5
  test('Invalid input (double fraction)', function() {
    assert.equal(convertHandler.getNum('3/2/3kg'), 'invalid number');
  });

  // 6
  test('No numerical input', function() {
    assert.equal(convertHandler.getNum('kg'), 1);
  });

  // 7
  test('Valid unit input', function() {
    assert.equal(convertHandler.getUnit('32L'), 'L');
  });

  // 8
  test('Invalid unit input', function() {
    assert.equal(convertHandler.getUnit('32g'), 'invalid unit');
  });

  // 9
  test('Correct return unit for gal', function() {
    assert.equal(convertHandler.getReturnUnit('gal'), 'L');
  });

  // 10
  test('Correct return unit for L', function() {
    assert.equal(convertHandler.getReturnUnit('L'), 'gal');
  });

  // 11
  test('Correct return unit for mi', function() {
    assert.equal(convertHandler.getReturnUnit('mi'), 'km');
  });

  // 12
  test('Correct return unit for km', function() {
    assert.equal(convertHandler.getReturnUnit('km'), 'mi');
  });

  // 13
  test('Spelled-out string for gal', function() {
    assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
  });

  // 14
  test('Spelled-out string for L', function() {
    assert.equal(convertHandler.spellOutUnit('L'), 'liters');
  });

  // 15
  test('gal to L conversion', function() {
    assert.approximately(convertHandler.convert(1, 'gal'), 3.78541, 0.1);
  });

  // 16
  test('L to gal conversion', function() {
    assert.approximately(convertHandler.convert(1, 'L'), 0.26417, 0.1);
  });
});
