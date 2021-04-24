const newNumbers = [1, 3, 5, 7];
//While we have this code set up, let’s also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator.

//Add a second argument of 10 to .reduce().
const newSum = 
newNumbers.reduce((accumulator, currentValue) =>{
  console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator+ currentValue;
}, 10)
