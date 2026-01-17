// (Find the number of years) Write a program that prompts the user to enter the 
// minutes (e.g., 1 billion), and displays the number of years and days for the min
// utes. For simplicity, assume a year has 365 days

let user = Number(prompt("Enter the number of minutes:"))
let hour = user / 60
let day = hour / 24
let year = day / 365
let days = day % 365
let result = user + " minutes is approximately " + Math.floor(year) + " years and "+ Math.floor(days) + "days"
console.log(result)