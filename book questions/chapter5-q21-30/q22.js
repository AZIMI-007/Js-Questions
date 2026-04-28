// Financial application: loan amortization schedule) The monthly payment for a 
// given loan pays the principal and the interest. The monthly interest is computed 
// by multiplying the monthly interest rate and the balance (the remaining princi
// pal). The principal paid for the month is therefore the monthly payment minus 
// the monthly interest. Write a program that lets the user enter the loan amount,number of years, and interest rate and displays the amortization schedule for the 
// loan. Here is a sample run:

let loanAmount = Number(prompt("Enter loan amount "));
let years = Number(prompt("Enter number of years "));
let annualRate = Number(prompt("Enter annual interest rate (e.g., 5 for 5%) "));


let monthlyRate = annualRate / 12 / 100;
let months = years * 12;


let monthlyPayment = loanAmount * 
    (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
    (Math.pow(1 + monthlyRate, months) - 1);


console.log("Monthly Payment: " + monthlyPayment.toFixed(2));

console.log("Month\tInterest\tPrincipal\tBalance"); 




let balance = loanAmount; 


for (let month = 1; month <= months; month++) {

    let interest = balance * monthlyRate;
    let principal = monthlyPayment - interest;
    balance = balance - principal;
    
    if (balance < 0) {
        balance = 0 ;
    }

    console.log(
        month + "\t" +
        interest.toFixed(2) + "\t\t" +
        principal.toFixed(2) + "\t\t" +
        balance.toFixed(2) 
    );
}