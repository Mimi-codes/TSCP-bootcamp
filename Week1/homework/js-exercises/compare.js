'use strict'
var foods = ['Amala', 'Fufu', 'Rice', 'Noodles'];
var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

console.log(foods.length); //4
console.log(colors.length); //7
console.log('The length of the array is 4 + 7');

//Conditional Statements
if(foods.length == colors.length) {
    console.log('They are the same!');
}else{
    console.log('Two different sizes');
}