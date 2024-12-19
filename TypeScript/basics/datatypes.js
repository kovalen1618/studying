"use strict";
;
let c = 2 /* Color.Blue */; // returns 2
console.log(c);
// Tuple
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
;
swapNums = swapNumbers(10, 20);
console.log(swapNums);
// Datatypes with functions
// Name function:
function add(num1, num2, num3) {
    // The '?' after num3 denotes that it is an optional parameter and will
    // not throw errors if no arguments are passed into the function call
    return num3 ? num1 + num2 + num3 : num1 + num2;
    // The ternary checks if num3 exists, if not, then just add num1 and num2
}
;
console.log(add(3, 4));
// Functions that do not return anything require an explicit type of 'void'
function subtract(num1, num2) {
    num1 - num2;
}
;
// Returns undefined due to no returned value from subtract()
console.log(subtract(10, 5));
function getItems(items) {
    // 'T' stands colloquillay for Type, but can be called whatever
    // desired, it's just a placeholder
    return new Array().concat(items);
}
;
// The 'T' is replaced with the datatype given in-between the angle-brackets (<>)
// Useful for specifiying the parameters' data type after the fact through the arguments
let concatResultNumber = getItems([1, 2, 3, 4, 5]);
let concatResultString = getItems(['a', 'b', 'c', 'd', 'e']);
console.log(concatResultNumber);
console.log(concatResultString);
