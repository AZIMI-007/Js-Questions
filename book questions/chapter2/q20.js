// (Financial application: calculate interest) If you know the balance and the annual 
// percentage interest rate, you can compute the interest on the next monthly pay
// ment using the following formula:
// interest = balance * (annualInterestRate/1200)
// Write a program that reads the balance and the annual percentage interest rate and 
// displays the interest for the next month. Here is a sample run:



let balance = Number(prompt("Enter balance"))
let annualInterestRate = Number(prompt("Enter interest rate (e.g., 3 for 3%)"))
let result = balance * (annualInterestRate/1200)
console.log("The interest is "+result)