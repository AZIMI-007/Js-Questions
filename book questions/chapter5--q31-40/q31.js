// (Financial application: compute CD value) Suppose you put $10,000 into a CD 
// with an annual percentage yield of 5.75%. After one month, the CD is worth
// 10000 + 10000 * 5.75 / 1200 = 10047.92
// After two months, the CD is worth
// 10047.91 + 10047.91 * 5.75 / 1200 = 10096.06
// After three months, the CD is worth
// 10096.06 + 10096.06 * 5.75 / 1200 = 10144.44
// and so on.
//   Write a program that prompts the user to enter an amount (e.g., 10000), the 
// annual percentage yield (e.g., 5.75), and the number of months (e.g., 18) and 
// displays a table as shown in the sample run.


let amount = Number(prompt("Enter the initial deposit amount: "));
let annualRate = Number(prompt("Enter annual percentage yield (e.g., 5.75): "));
let months = Number(prompt("Enter number of months: "));

let monthlyRate = annualRate / 1200;

console.log("Month\tCD Value");

for (let i = 1; i <= months; i++) {
    amount = amount + amount * monthlyRate;
    console.log(i + "\t" + amount.toFixed(2));
}