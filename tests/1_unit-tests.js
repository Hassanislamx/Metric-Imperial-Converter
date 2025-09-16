const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  // 1–6: getNum
  suite('Function convertHandler.getNum(input)', function() {
    test('Whole number input', function(done){
      assert.equal(convertHandler.getNum('32L'), 32);
      done();
    });

    test('Decimal Input', function(done){
      assert.equal(convertHandler.getNum('3.2L'), 3.2);
      done();
    });

    test('Fractional Input', function(done){
      assert.equal(convertHandler.getNum('3/2L'), 1.5);
      done();
    });

    test('Fractional Input w/ Decimal', function(done){
      assert.equal(convertHandler.getNum('3.2/2L'), 1.6);
      done();
    });

    test('Invalid Input (double fraction)', function(done){
      assert.equal(convertHandler.getNum('3/2/2L'), 'invalid number');
      done();
    });

    test('No Numerical Input', function(done){
      assert.equal(convertHandler.getNum('L'), 1);
      done();
    });
  });

  // 7–8: getUnit
  suite('Function convertHandler.getUnit(input)', function(){
    test('For Each Valid Unit Inputs', function(done){
      let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        let result = convertHandler.getUnit(32 + ele);
        if (ele.toLowerCase() === 'l') {
          assert.equal(result, 'L');
        } else {
          assert.equal(result, ele.toLowerCase());
        }
      });
      done();
    });

    test('Unknown Unit Input', function(done){
      assert.equal(convertHandler.getUnit('32hello'), 'invalid unit');
      done();
    });
  });

  // 9: getReturnUnit
  suite('Function convertHandler.getReturnUnit(initUnit)', function(){
    test('Correct return unit for each valid input unit', function(done){
      const input = ['gal','l','mi','km','lbs','kg'];
      const expected = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expected[i]);
      });
      done();
    });
  });

  // 10: spellOutUnit
  suite('Function convertHandler.spellOutUnit(unit)', function(){
    test('Return spelled-out string for each valid input unit', function(done){
      const input = ['gal','l','mi','km','lbs','kg'];
      const expected = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expected[i]);
      });
      done();
    });
  });

  // 11–16: convert
  suite('Function convertHandler.convert(num, unit)', function(){
    test('Gal to L', function(done){
      assert.approximately(convertHandler.convert(1,'gal'), 3.78541, 0.1);
      done();
    });

    test('L to Gal', function(done){
      assert.approximately(convertHandler.convert(1,'L'), 0.26417, 0.1);
      done();
    });

    test('Mi to Km', function(done){
      assert.approximately(convertHandler.convert(1,'mi'), 1.60934, 0.1);
      done();
    });

    test('Km to Mi', function(done){
      assert.approximately(convertHandler.convert(1,'km'), 0.62137, 0.1);
      done();
    });

    test('Lbs to Kg', function(done){
      assert.approximately(convertHandler.convert(1,'lbs'), 0.45359, 0.1);
      done();
    });

    test('Kg to Lbs', function(done){
      assert.approximately(convertHandler.convert(1,'kg'), 2.20462, 0.1);
      done();
    });
  });

});
