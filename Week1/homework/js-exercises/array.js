'use strict'
var things = [];
console.log('the value of the array is "null"');
console.log(things);
var animals = ['Cat', 'Goat', 'Panda'];
console.log(animals[1]); //logs 'Goat'

animals.unshift("Piglet"); //adds 'Piglet' to beginning of the array
console.log(animals[1]); //logs 'Cat'