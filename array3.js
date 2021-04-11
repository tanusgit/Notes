/*
you can re-assign elements in an array and re-assign an entire new array to a variable declared using the let keyword.
*/
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
 condiments = ['Mayo', 'Mustard', 'Soy Sauce', 'Sriracha'];
 condiments =['Mayo'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
console.log(condiments);


//to change a value in const variable we need to use the index position of the array. We cannot chnage the entire array
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = ('Spoon');
console.log(utensils);
//throw error utensils = ['Spoon'];
