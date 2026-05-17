// (Financial application: compute the future investment value) Write a method that 
// computes future investment value at a given interest rate for a specified number 
// of years. The future investment is determined using the formula in Programming 
// Exercise 2.21.
// Use the following method header:
// public static double futureInvestmentValue(
// double investmentAmount, double monthlyInterestRate, int years)
// For example, futureInvestmentValue(10000, 0.05/12, 5) returns 
// 12833.59.
// Write a test program that prompts the user to enter the investment amount (e.g., 
// 1000) and the interest rate (e.g., 9%) and prints a table that displays future value 
// for the years from 1 to 30, as shown below:



function futureInvestmentValue( investmentAmount, monthlyInterestRate, years
){

    let futureValue =
    investmentAmount * Math.pow(1 + monthlyInterestRate, years * 12);

    return futureValue;
}

let investmentAmount = 1000;
let annualInterestRate = 9;

let monthlyInterestRate =annualInterestRate / 100 / 12;

console.log("Year\tFuture Value");

for (let year = 1; year <= 30; year++) {

    let value =
    futureInvestmentValue(
        investmentAmount,
        monthlyInterestRate,
        year);

    console.log(year + "\t      " + value.toFixed(2));
}