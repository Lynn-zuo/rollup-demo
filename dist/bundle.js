'use strict';

class Apple {
  constructor ({ model }) {
    this.className = 'Apple';
    this.model = model;
  }
  static displayName = "Point";

  getModel () {
    return this.model
  }
	getName () {
    return this.className
  }
}

const appleModel = new Apple();

appleModel.getModel();

console.log(appleModel);
