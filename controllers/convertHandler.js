function ConvertHandler() {

  this.getNum = function(input) {
    let result;
    let numRegex = /^[\d/.]+/;
    let match = input.match(numRegex);

    if (!match) return 1; // default

    result = match[0];

    // Invalid if more than one "/"
    if (result.split('/').length > 2) return 'invalid number';

    try {
      if (result.includes('/')) {
        let nums = result.split('/');
        result = parseFloat(nums[0]) / parseFloat(nums[1]);
      } else {
        result = parseFloat(result);
      }
    } catch (err) {
      return 'invalid number';
    }

    if (isNaN(result)) return 'invalid number';
    return result;
  };

  this.getUnit = function(input) {
    let result;
    let unitRegex = /[a-zA-Z]+$/;
    let match = input.match(unitRegex);
    if (!match) return 'invalid unit';

    result = match[0].toLowerCase();

    const validUnits = ['gal','l','mi','km','lbs','kg'];

    if (validUnits.includes(result)) {
      if (result === 'l') return 'L'; // special case uppercase
      return result;
    }
    return 'invalid unit';
  };

  this.getReturnUnit = function(initUnit) {
    const map = {
      'gal': 'L',
      'L': 'gal',
      'mi': 'km',
      'km': 'mi',
      'lbs': 'kg',
      'kg': 'lbs'
    };
    return map[initUnit];
  };

  this.spellOutUnit = function(unit) {
    const spellOut = {
      'gal': 'gallons',
      'L': 'liters',
      'mi': 'miles',
      'km': 'kilometers',
      'lbs': 'pounds',
      'kg': 'kilograms'
    };
    return spellOut[unit];
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch(initUnit) {
      case 'gal': result = initNum * galToL; break;
      case 'L': result = initNum / galToL; break;
      case 'lbs': result = initNum * lbsToKg; break;
      case 'kg': result = initNum / lbsToKg; break;
      case 'mi': result = initNum * miToKm; break;
      case 'km': result = initNum / miToKm; break;
      default: return 'invalid unit';
    }
    return parseFloat(result.toFixed(5));
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };

}

module.exports = ConvertHandler;
