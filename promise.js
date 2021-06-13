const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => 
{
if(inventory.sunglasses > 0){
  resolve('Sunglasses order processed.');
}else{
   reject('That item is sold out.'); 
}
}
const orderSunglasses = () =>{
  const orderPromise = new Promise(myExecutor);
  return orderPromise;
}
const orderPromise = orderSunglasses();
console.log(orderPromise);
//run node app.js on the reminal to run the program
