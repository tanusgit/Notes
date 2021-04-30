let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
//prints all the names in the 
//nested objects inside the // crew
for (let i in spaceship.crew) {
  console.log(`${i}: ${spaceship.crew[i].name }`);
}

for (let j in spaceship.crew) {
  console.log(`${spaceship.crew[j].name}: ${spaceship.crew[j].degree}`)
};
