// (Science: day of the week) Zeller’s congruence is an algorithm developed by 
// Christian Zeller to calculate the day of the week. The formula is
// h = ¢q + 26(m + 1)
// 10
// where
// + k + k
// 4 + j
// 4 + 5j≤ %7
//  ■ h is the day of the week (0: Saturday, 1: Sunday, 2: Monday, 3: Tuesday, 4: 
// Wednesday, 5: Thursday, 6: Friday).
//  ■ q is the day of the month.
//  ■ m is the month (3: March, 4: April, …, 12: December). January and February 
// are counted as months 13 and 14 of the previous year.
//  ■ j is the century (i.e., year
// 100 ).
//  ■ k is the year of the century (i.e., year % 100).
// Note that the division in the formula performs an integer division. Write a pro
// gram that prompts the user to enter a year, month, and day of the month, and 
// displays the name of the day of the week. 

let year = Number(prompt("Enter year:"))
let month = Number(prompt("Enter month (1-12):"))
let day = Number(prompt("Enter day (1-31):"))

let q = day

if (month === 1) {
    month = 13
    year = year - 1
} else if (month === 2) {
    month = 14
    year = year - 1
}

let m = month
let k = year % 100
let j = Math.floor(year / 100)
let h = (q + Math.floor((26 * (m + 1)) / 10)+ k + Math.floor(k / 4)+ Math.floor(j / 4)+ 5 * j) % 7


if (h === 0) {
    console.log("Saturday") 
}else if (h === 1) {
    console.log("Sunday") 
}else if (h === 2) {
    console.log("Monday") 
}else if (h === 3) {
    console.log("Tuesday") 
}else if (h === 4) {
    console.log("Wednesday") 
}else if (h === 5) {
    console.log("Thursday") 
}else {
    console.log("Friday") 
}






