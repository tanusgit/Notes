/*
One of the features added in ES6 is the ability to use default parameters. Default parameters allow parameters
to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.
*/
function sayThanks(name) {
  console.log('Thank you for your purchase ' + name +'! We appreciate your business.');
}
sayThanks('Cole')

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
