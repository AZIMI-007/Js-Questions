// (Population projection) Rewrite Programming Exercise 1.11 to prompt the user 
// to enter the number of years and displays the population after the number of years. 
// Use the hint in Programming Exercise 1.11 for this program. The population 
// should be cast into an integer


let userYears = Number(prompt("Enter the number of years:"))
let population = 312032486
let year = (365 * 24 * 60 * 60)
let birth = year / 7
let death = year / 13
let immigrant = year / 45
let ChangeY = birth + immigrant - death
let p =  population + (ChangeY * userYears)
console.log(Math.floor(p))