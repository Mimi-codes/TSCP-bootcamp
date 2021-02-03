'use strict'
var z = 7.25;
console.log(z); //7.25

var a = (Math.round(z));
console.log(a); //7

if (a >= z){
    console.log('value of "a" is higher');
}else {
    console.log('value of "z" is higher');
}

let b = z; //stores the value of "z" which is the highest in variable "b".
console.log(b); //logs the value of the highest value.