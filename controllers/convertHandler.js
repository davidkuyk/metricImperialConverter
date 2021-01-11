/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;

    if (!/[0-9]/.test(input)) {
      result = 1
      return result;
    } else if (/\/.{0,}\//.test(input)) {
        result = "invalid number";
        return result;
      } else {
        result = input.replace(/[A-Za-z]/g, '');
        result = eval(result);
        if (isNaN(result)) {
            result = "invalid number";
          }
        return result;
      }
  };
  
  this.getUnit = function(input) {
    let result;
    result = input.replace(/[^A-Za-z]/g, '')
    if (result !== "L") {
      result = result.toLowerCase();
    } 
    if (result == "l") {
      result = result.toUpperCase();
    }
    let acceptedInputs = ['gal','L','mi','km','lbs','kg'];
    if (!acceptedInputs.includes(result)) {
      result = "invalid unit";
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    if (initUnit == "invalid unit") {
      result = "invalid unit";
    } else {
      let inputUnit = ['gal','L','mi','km','lbs','kg'];
      let expectUnit = ['L','gal','km','mi','kg','lbs'];
      inputIndex = inputUnit.indexOf(initUnit);
      result = expectUnit[inputIndex];
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    if (unit == "invalid unit") {
      result = "invalid unit";
    } else {
      let inputUnit = ['gal','L', 'l', 'mi','km','lbs','kg'];
      let expectUnit = ['gallons','liters', 'liters', 'miles','kilometers','pounds','kilograms'];
      inputIndex = inputUnit.indexOf(unit.toLowerCase());
      result = expectUnit[inputIndex];
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit) {
      case "gal":
        result = (initNum * galToL).toFixed(5);
        break;
      case "L":
        result = (initNum / galToL).toFixed(5);
        break;
      case "l":
        result = (initNum / galToL).toFixed(5);
        break;
      case "lbs":
        result = (initNum * lbsToKg).toFixed(5);
        break;
      case "kg":
        result = (initNum / lbsToKg).toFixed(5);
        break;
      case "mi":
        result = (initNum * miToKm).toFixed(5);
        break;
      case "km":
        result = (initNum / miToKm).toFixed(5);
        break;
    }
    return eval(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    let initial_Units = this.spellOutUnit(initUnit);
    let return_Units = this.spellOutUnit(returnUnit);
    result = `${initNum} ${initial_Units} converts to ${returnNum} ${return_Units}`
    return result;
  };
  
}

module.exports = ConvertHandler;
