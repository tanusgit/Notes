const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = (num) => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};
const addOneToOne = () => 1 + 1;
 
let time2p2 = timeFuncRuntime(addOneToOne);
console.log(time2p2);
// Write your code below

const checkConsistentOutput = (fun, value) => {
   let firstTry = fun(value);
    let secondTry = fun(value);
  if (firstTry === secondTry) {
        return firstTry;
    } else {
        return 'This function returned inconsistent results';
    }
};

let m = checkConsistentOutput(addTwo, 2);
console.log(m);
checkConsistentOutput(addTwo, 3); 
