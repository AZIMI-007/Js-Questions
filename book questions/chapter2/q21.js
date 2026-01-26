// (Financial application: calculate future investment value) Write a program that 
// reads in investment amount, annual interest rate, and number of years, and dis
// plays the future investment value using the following formula:
// futureInvestmentValue =
// investmentAmount * (1 + monthlyInterestRate)numberOfYears*12
// For example, if you enter amount 1000, annual interest rate 3.25%, and number 
// of years 1, the future investment value is 1032.98.


let investmentAmount = Number(prompt("Enter investment amount:"))
let interestrate = Number(prompt("Enter annual interest rate in percentage:"))
let numberOfYears = Number(prompt("Enter number of years:"))
let monthlyInterestRate = interestrate / 1200
let fv = investmentAmount * (1 + monthlyInterestRate)**(numberOfYears*12)
console.log("Accumulated value is "+fv)