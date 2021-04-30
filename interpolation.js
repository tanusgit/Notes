const robot = {
  model : '1E78V2',
  energyLevel: 100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel} is.` 
  }
};
console.log(robot.provideInfo());
