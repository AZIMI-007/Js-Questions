// (Palindrome number) Write a program that prompts the user to enter a three-digit 
// integer and determines whether it is a palindrome number. A number is palin
// drome if it reads the same from right to left and from left to right.

let userNumber = Number(prompt("Enter a three-digit "))
let step1 = userNumber / 100 
let firstNumber = Math.floor(step1)
let reminder = userNumber %100
let step2 = reminder / 10
let secondNumber = Math.floor(step2)
let thirdNumber = reminder % 10
if(firstNumber === thirdNumber){
    console.log("it is a palindrome number")
}else{
    console.log("it is not a palindrome number")
}