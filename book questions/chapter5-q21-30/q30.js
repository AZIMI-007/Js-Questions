//  (Financial application: compound value) Suppose you save $100 each month 
// into a savings account with the annual interest rate 5%. So, the monthly interest 
// rate is 0.05 / 12 = 0.00417. After the first month, the value in the account 
// becomes
// 100 * (1 + 0.00417) = 100.417
// After the second month, the value in the account becomes
// (100 + 100.417) * (1 + 0.00417) = 201.252
// After the third month, the value in the account becomes
// (100 + 201.252) * (1 + 0.00417) = 302.507
// and so on.
//   Write a program that prompts the user to enter an amount (e.g., 100), the annual 
// interest rate (e.g., 5), and the number of months (e.g., 6) and displays the amount 
// in the savings account after the given month.



let moneySaves = Number(prompt("Enter the money you save every month"))
let interestRate = Number(prompt("Enter the Annual interest rate")) / 12 /100
let month = Number(prompt("Enter the month"))

let account = 0

for (let i = 1 ; i <= month ; i++){
    
     account = (account + moneySaves) * (1 + interestRate) 

}
console.log( "your money is " + account + " after "+ month + " month ")