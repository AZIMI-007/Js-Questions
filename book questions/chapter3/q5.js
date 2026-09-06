// (Find future dates) Write a program that prompts the user to enter an integer for 
// today’s day of the week (Sunday is 0, Monday is 1, …, and Saturday is 6). Also 
// prompt the user to enter the number of days after today for a future day and dis
// play the future day of the week.


let day = Number(prompt("Enter today's day:"))
let future = Number(prompt("Enter the number of days elapsed since today:"))

let futureDay = (day + future) % 7
if (day === 0 ){
    console.log("Today is sunday and the future day is "+futureDay)
}else if(day ===1){
    console.log("Today is Monday and the future day is "+futureDay)
}else if(day ===2){
    console.log("Today is Tuesday and the future day is "+futureDay)
}else if(day ===3){
    console.log("Today is Wednesday and the future day is "+futureDay)
}else if(day ===4){
    console.log("Today is Thursday and the future day is "+futureDay)
}else if(day ===5){
    console.log("Today is Friday and the future day is "+futureDay)
}else if(day ===6){
    console.log("Today is Friday and the future day is "+futureDay)
}else {
    console.log("invaled")
}