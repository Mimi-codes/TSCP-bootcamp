'use strict'
let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString.length); //42
myString = myString.split(',').join(" ");
console.log(myString); //logs 'myString' to the console