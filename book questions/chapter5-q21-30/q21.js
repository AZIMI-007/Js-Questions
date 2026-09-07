// (Financial application: compare loans with various interest rates) Write a pro
// gram that lets the user enter the loan amount and loan period in number of years 
// and displays the monthly and total payments for each interest rate starting from 
// 5% to 8%, with an increment of 1/8. Here is a sample run:

let loanAmount = Number(prompt("Enter the loan amount: "))
let numberOfMonths = Number(prompt("Enter the loan term in years: ")) * 12

for (let i = 5; i <= 8; i += 0.125) {

    let rate = i / 100
    let monthlyRate = rate / 12

    let monthlyPayment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)   / (Math.pow(1 + monthlyRate, numberOfMonths) - 1)

    let totalPayment = monthlyPayment * numberOfMonths

    console.log(
        "Interest Rate: " + i.toFixed(3) + "%" +
        " | Monthly Payment: " + monthlyPayment.toFixed(2) +
        " | Total Payment: " + totalPayment.toFixed(2)
    )
}