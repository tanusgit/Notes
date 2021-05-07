//class dog
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}
//object halley
let halley = {
  _name: 'Halley',
  _behavior: 0,
 
  get name() {
    return this._name;
  },
 
  get behavior() {
    return this._behavior;
  },
 
  incrementBehavior() {
    this._behavior++;
  }
}
