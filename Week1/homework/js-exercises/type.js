'use strict'
var name = 'Tomi';
var animal = 'Cat';

var myPlace = {
    Country : 8
};

var myTool = {
    Laptop : 2
};

//Data Type
console.log(typeof animal); //string
console.log(typeof myPlace); //object

//Conditional statements
if (typeof 'Tomi' == typeof 'Cat'){
    console.log('SAME TYPE');
}else { 
    console.log('Not the same...');
}if (typeof 8 == typeof 2) {
    console.log('SAME TYPE');
}else { 
    console.log('Not the same...');
}if (typeof 8 == typeof 'Cat'){
    console.log('SAME TYPE');
}else { 
    console.log('Not the same...');
}
















/*
if (typeof 'Tomi' == typeof 'Cat'){
    console.log('SAME TYPE');
}if (typeof 8 == typeof 2) {
    console.log('SAME TYPE');
}if (typeof 8 !== 'Cat'){
    console.log('Not the same...');
}else{
    console.log('SAME TYPE');
}

if (typeof 'Tomi' == typeof 'Cat'){
    console.log('SAME TYPE');
}if (typeof 'Country' == typeof 'Laptop') {
    console.log('SAME TYPE');
}if (typeof 'Country' == 'Cat'){
    console.log('SAME TYPE');
}else { console.log('Not the same...');}
*/
