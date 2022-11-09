const stringLength = (str) => {
  if (str.length >= 1 && str.length <= 10){
    return str.length;
  } else {
    throw new Error(`${str} doesn't meet the requirement`);
  }
  
}

const reverseString = (str) => {
  return str.toLowerCase().split('').reverse().join('');
}

class Calculator {
  static add = (a, b) => {
    if(a < 1 || b < 1) {
      return (a * 10 + b * 10) / 10; 
    }
    return a + b;
  }

  static subtract = (a, b) => {
    if(a < 1 || b < 1) {
      return (a * 10 - b * 10) / 10; 
    }
    return a - b;
  }
  
  static divide = (a, b) => {
    if(b === 0){
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  static multiply = (a, b) => {
    if (a < 1 || b < 1) {
      return a * 10 * b * 10 / 100;
    }
    return a * b;
  }

}

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = {stringLength, reverseString, Calculator, capitalize};