'use strict'

class RangeValidator {
  constructor (from, to) {
    if (from >= to || to <= from) {
      throw new RangeError('Incorrect parameters, expected two numbers');
    }
    this._from = from;
    this._to = to;
  }

  get from () {
  return this._from;
  }

  get to () {
    return this._to;
  }
  
  set from (newFrom) {
    if(typeof newFrom !== 'number' || isNaN(newFrom)) {
      throw new TypeError('from isn`t number')
    }
    this._from = newFrom;
  }

  set to (newTo) {
    if(typeof newTo !== 'number' || isNaN(newTo)) {
      throw new TypeError('to isn`t number')
    }
    this._to = newTo;
  }

  get arrayRange () {
    return [this._from, this._to];
  };
 

validate (num) {
  if (num >= this.from && num <= this.to) {
    return num;
  }
  throw new RangeError('Number isn`t in range');
}
}

const range = new RangeValidator(5,10);
// const rangeError = new RangeValidator (10,5);

console.log(range.arrayRange);
console.log(range.validate(10));
// console.log(range.validate(1000))