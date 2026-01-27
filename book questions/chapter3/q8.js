// (Sort three integers) Write a program that prompts the user to enter three integers 
// and display the integers in non-decreasing order.

let num1 = Number(prompt("Enter the first number"))
let num2 = Number(prompt("Enter the second number"))
let num3 = Number(prompt("Enter the third number"))

if (num1 <= num2 && num2 <= num3) {
    console.log(num1, num2, num3)

} else if (num1 <= num3 && num3 <= num2) {
    console.log(num1, num3, num2)

} else if (num2 <= num1 && num1 <= num3) {
    console.log(num2, num1, num3)

} else if (num2 <= num3 && num3 <= num1) {
    console.log(num2, num3, num1)

} else if (num3 <= num1 && num1 <= num2) {
    console.log(num3, num1, num2)

} else {
    console.log(num3, num2, num1)
}