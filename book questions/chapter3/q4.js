// (Random month) Write a program that randomly generates an integer between 1 
// and 12 and displays the English month name January, February, …, December for 
// the number 1, 2, …, 12, accordingly.

let user = Number(prompt("Enter a number betwin 1 , 12"))
if(user === 1){
    console.log("January")
}else if(user === 2){
    console.log("February")
}else if (user === 3){
    console.log("March")
}else if(user === 4){
    console.log("April")
}else if(user === 5){
    console.log("May")
}else if(user === 6){
    console.log("June")
}else if(user === 7){
    console.log("July")
}else if(user === 8){
    console.log("August")
}else if(user === 9){
    console.log("September")
}else if(user === 10){
    console.log("October")
}else if(user === 11){
    console.log("November")
}else if(user === 12){
    console.log("December")
}else{
    console.log("invalid")
}
