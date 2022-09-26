"use strict";

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  get from() {
    return this._from;
  }

  get to() {
    return this._to;
  }

  set from(newFrom) {
    if (typeof newFrom !== "number" || isNaN(newFrom)) {
      throw new TypeError("from isn`t number");
    }
    if (newFrom > this.to) {
      throw new RangeError("from must be less than to");
    }
    this._from = newFrom;
  }

  set to(newTo) {
    if (typeof newTo !== "number" || isNaN(newTo)) {
      throw new TypeError("to isn`t number");
    }
    if (newTo < this.from) {
      throw new RangeError("to must be larger than from");
    }
    this._to = newTo;
  }

  get arrayRange() {
    return [this.from, this.to];
  }

  validate(num) {
    if (typeof num !== "number" || isNaN(num)) {
      throw new TypeError("arror valid number");
    }
    if (num >= this.from && num <= this.to) {
      return num;
    }
    throw new RangeError("Number isn`t in range");
  }
}

const range = new RangeValidator(5, 10);
// const rangeError = new RangeValidator (10,5);

console.log(range.arrayRange);
console.log(range.validate(10));
// console.log(range.validate(1000))
