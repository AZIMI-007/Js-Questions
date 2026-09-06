// (Find the number of days in a month) Write a program that prompts the user 
// to enter the month and year and displays the number of days in the month. For 
// example, if the user entered month 2 and year 2012, the program should display 
// that February 2012 had 29 days. If the user entered month 3 and year 2015, the 
// program should display that March 2015 had 31 days.


let year = Number(prompt("Enter the year"))
let month = Number(prompt("Enter the month"))
if(month === 1){
    console.log("the January "+year+" had 31 days")
}else if(month === 2){
    console.log("the February "+year+" had 29 days")
}else if(month === 3){
    console.log("the March "+year+" had 31 days")
}else if(month === 4){
    console.log("the April "+year+" had 30 days")
}else if(month === 5){
    console.log("the May "+year+" had 31 days")
}else if(month === 6){
    console.log("the June "+year+" had 30 days")
}else if(month === 7){
    console.log("the July "+year+" had 31 days")
}else if(month === 8){
    console.log("the August "+year+" had 31 days")
}else if(month === 9){
    console.log("the September "+year+" had 30 days")
}else if(month === 10){
    console.log("the October "+year+" had 31 days")
}else if(month === 11){
    console.log("the November "+year+" had 30 days")
}else if(month === 12){
    console.log("the December "+year+" had 31 days")
}