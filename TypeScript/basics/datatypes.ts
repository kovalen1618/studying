// Familiar with string, number, boolean, and arrays
// Enums
const enum Color {
	Red,
	Green,
	Blue
};

let c : Color = Color.Blue; // returns 2
console.log(c);

// Tuple
let swapNums : [number, number];

function swapNumbers(num1, num2) : [number, number] {
    return [num2, num1];
};

swapNums = swapNumbers(10, 20);
console.log(swapNums);