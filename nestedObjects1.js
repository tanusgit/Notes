let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
};
//added a new member variable to the 
//spaceship object named disabled
let remotelyDisable = obj => {
  obj.disabled = true;
};
remotelyDisable(spaceship);
greenEnergy(spaceship);
console.log(spaceship);
