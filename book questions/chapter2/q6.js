// (Sum the digits in an integer) Write a program that reads an integer between 0 and 
// 1000 and adds all the digits in the integer. For example, if an integer is 932, the 
// sum of all its digits is 14.
// Hint: Use the % operator to extract digits, and use the / operator to remove the 
// extracted digit. For instance, 932 % 10 = 2 and 932 / 10 = 93.


let userNumber = Number(prompt("Enter a number between 0 and 1000:"))
let step1 = userNumber / 100 
let firstNumber = Math.floor(step1)
let reminder = userNumber %100
let step2 = reminder / 10
let secondNumber = Math.floor(step2)
let thirdNumber = reminder % 10
let total = firstNumber + secondNumber + thirdNumber
console.log("The sum of the digits is "+ total)