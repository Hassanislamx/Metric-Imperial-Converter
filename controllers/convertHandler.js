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
    let unitMatch = input.match(/[a-zA-Z]+/);
    if (!unitMatch) return 'invalid unit';
    let unit = unitMatch[0].toLowerCase();
    let validUnits = ['gal','l','mi','km','lbs','kg'];  
    if(!validUnits.includes(unit)) return 'invalid unit';

    // Liter should always return uppercase 'L'
    return unit === 'l' ? 'L' : unit;
  };

  this.getReturnUnit = function(initUnit) {
    const unitLower = initUnit.toLowerCase();
    const unitMap = {
      'gal': 'L',
      'l': 'gal',
      'mi': 'km',
      'km': 'mi',
      'lbs': 'kg',
      'kg': 'lbs'
    };
    return unitMap[unitLower];
  };

  this.spellOutUnit = function(unit) {
    const unitLower = unit.toLowerCase();
    const unitSpelling = {
      'gal': 'gallons',
      'l': 'liters',
      'mi': 'miles',
      'km': 'kilometers', 
      'lbs': 'pounds',
      'kg': 'kilograms'
    };
    return unitSpelling[unitLower];
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let unitLower = initUnit.toLowerCase();
    let result;

    switch(unitLower) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      default:
        return 'invalid unit';
    }

    return Math.round(result * 100000) / 100000;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let initUnitSpelled = this.spellOutUnit(initUnit);
    let returnUnitSpelled = this.spellOutUnit(returnUnit);

    return `${initNum} ${initUnitSpelled} converts to ${returnNum} ${returnUnitSpelled}`;
  };

}

module.exports = ConvertHandler;
