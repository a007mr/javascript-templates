// Smoothy basis

var liquids = ['water', 'milk', 'juice', 'tea', 'yogurt'];
var fruits = ['pineapple', 'apple', 'mango', 'watermelon'];
var greens = ['mint', 'spinach', 'arugula', 'parsley', 'basil'];

// Clients choice

var chosenLiquid = 1;
var chosenFruit = 3;
var chosenGreen = 2;

// Order

var order = 'liquids — ' + liquids[chosenLiquid - 1] + ', fruits — ' + fruits[chosenFruit - 1] + ', greens — ' + greens[chosenGreen - 1];
console.log(order); 


// Array for automatical orders