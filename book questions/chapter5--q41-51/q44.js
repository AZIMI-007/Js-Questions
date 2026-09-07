
// (Computer architecture: bit-level operations) A short value is stored in 16 bits. 
// Write a program that prompts the user to enter a short integer and displays the 16
// bits for the integer. Here are sample runs:





let number = Number(prompt('Please enter a number'));

let string = (number & 0xFFFF).toString(2);

string = string.padStart(16, '0');

console.log("The bits are " + string);