//function inside a class does not need the word function or def
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays =20;
  }
  get name(){
    return this._name;
  }
    get department(){
    return this._department;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
//function inside a class does not need the word function or def
  takeVacationDays(daysOff){
  this._remainingVacationDays = this._remainingVacationDays - daysOff;

  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
