// (Financial application: payroll) Write a program that reads the following infor
// mation and prints a payroll statement: 
// Employee’s name (e.g., Smith)
// Number of hours worked in a week (e.g., 10)
// Hourly pay rate (e.g., 9.75)
// Federal tax withholding rate (e.g., 20%)
// State tax withholding rate (e.g., 9%)
// A sample run is shown below:





let name = prompt("Enter employee's name:")
let hours = Number(prompt("Enter number of hours worked in a week:"))
let payRate = Number(prompt("Enter hourly pay rate:"))
let federalRate = Number(prompt("Enter federal tax withholding rate (example 0.20 for 20%):"))
let stateRate = Number(prompt("Enter state tax withholding rate (example 0.09 for 9%):"))

let grossPay = hours * payRate

let federalTax = grossPay * federalRate
let stateTax = grossPay * stateRate

let totalDeduction = federalTax + stateTax

let netPay = grossPay - totalDeduction

console.log("Employee Name: " + name)
console.log("Hours Worked: " + hours)
console.log("Pay Rate: $" + payRate)
console.log("Gross Pay: $" + grossPay)
console.log("Deductions:")
console.log("  Federal Withholding: $" + federalTax)
console.log("  State Withholding: $" + stateTax)
console.log("  Total Deduction: $" + totalDeduction)
console.log("Net Pay: $" + netPay)
