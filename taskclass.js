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

}

const range1 = new RangeValidator(5,10);