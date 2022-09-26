'use strict'

class RangeValidator {
  constructor (from, to) {
    this.from = from;
    this.to = to;
  }

  get from () {
  return this._from;
  }

  get to () {
    return this._to;
  }
  
  set from (from) {
    this._from = from;
  }

  set to (to) {
    this._to = to;
  }

  get arrayRange () {
    return [this.from, this.to];
  };
 

validate (num) {
  if (num >= this.from && num <= this.to) {
    return num;
  }
  throw new TypeError('Number isn`t in range')
}
}

const range = new RangeValidator(5,10);

console.log(range.arrayRange);
console.log(range.validate(10));
console.log(range.validate(1000))