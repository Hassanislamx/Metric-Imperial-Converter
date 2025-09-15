function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let num = input.match(/[.\d\/]+/g) || ["1"];
    let nums = num[0].split('/');
      if(nums.length > 2) return 'invalid number';
    result = nums[0] / nums[1] || nums[0];
    result = Math.round(result * 100000) / 100000;
    if(isNaN(result)) return 'invalid number';
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    let unit = input.match(/[a-zA-Z]+/)[0];
    let validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];  
            if(!validUnits.includes(unit)) return 'invalid unit';
            return unit;
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
