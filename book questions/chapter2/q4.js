// (Convert pounds into kilograms) Write a program that converts pounds into kilo
// grams. The program prompts the user to enter a number in pounds, converts it 
// to kilograms, and displays the result. One pound is 0.454 kilograms.

let userPound = Number(prompt("Enter a number in pounds:"))
let pound = 0.453592
let kilogram = userPound * pound
console.log(userPound + " pound is "+kilogram + " kilograms")