'use strict'

var drinkTray = []; //declares an empty array

const drinkTypes = ['cola', 'lemonade', 'water']; //added 3 properties to the array 
for (let x = 0; x <= 5; x++) {
if (x === 0) {
    drinkTray.push('cola');
} else if (x === 1) {
    drinkTray.push('cola');
} else if (x === 2) {
    drinkTray.push('lemonade');   
} else if (x === 3) {
    drinkTray.push('lemonade');

} else if (x === 4) {
    drinkTray.push('water');
}
}
console.log(drinkTray); // looped through the array and added conditional statements

let guys = 'Hey ' + 'guys, ' + 'I ' + 'brought ' + 'a ' + drinkTray[0] + ', ' + drinkTray[1] + ', ' + drinkTray[2] + ', ' + drinkTray[3] + ', ' + drinkTray[4] + '!' ;
console.log(guys); //logs variable 'guys' to the console
