/*
We’re also going to learn about another way to add a level of abstraction to our programming: higher-order functions.
Higher-order functions are functions that accept other functions as arguments and/or return functions as output.
This enables us to build abstractions on other abstractions, just like “We hosted a birthday party” is an abstraction
that may build on the abstraction “We made a cake.”

In summary, using more abstraction in our code allows us to write more modular code which is easier to read and debug.
*/

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// Write your code below
let is2p2 =checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name)
