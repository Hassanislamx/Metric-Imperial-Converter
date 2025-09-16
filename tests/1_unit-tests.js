const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  suite('Function convertHandler.getNum(input)', function()  
        {
          test('Whole number input', function(done){
                let input = '32L';
                assert.equal(convertHandler.getNum(input),32);
                done();
              
              });
            test('Decimal Input', function(done)    
                {
                   let input = '3.2L';
                   assert.equal(convertHandler.getNum(input),3.2);
                   done();
                });
            test('Fractional Input', function(done)
                {
                let input = '3/2L';
                assert.equal(convertHandler.getNum(input),1.5);
                done();
              });
            test('Fractional Input w/ Decimal', function(done)   
                {
                let input = '3.2/2L';
                assert.equal(convertHandler.getNum(input),1.6);
                done();
              });
            test('Invalid Input (double fraction)', function(done)    
                {
                let input = '3/2/2L';
                assert.equal(convertHandler.getNum(input),'invalid number');
                done();
              });
            test('No Numerical Input', function(done){
                let input = 'L';
                assert.equal(convertHandler.getNum(input),1);
                done();
            });
            test('Invalid Input (no number)', function(done){
                let input = 'L';
                assert.equal(convertHandler.getNum(input),1);
                done();
            });
            
            }
        
        );
  suite('Function convertHandler.getUnit(input)', function(){
      test('For Each Valid Unit Inputs', function(done){
        let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
        input.forEach(function(ele) {
          assert.equal(convertHandler.getUnit(32+ele),ele);
        });
        done();
      });
    test('Unknown Unit Input', function(done){
      assert.equal(convertHandler.getUnit(32+'hello'),'invalid unit');
      done();
    });
  });


        
});