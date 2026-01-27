// (Game: addition quiz) Listing 3.3, SubtractionQuiz.java, randomly generates a 
// subtraction question. Revise the program to randomly generate an addition ques
// tion with two integers less than 100.

let num1 = Math.floor(Math.random()*100)+1
let num2 = Math.floor(Math.random()*100)+1
let answer = Number(prompt("what is "+num1+" + " +num2 ))
if (answer === num1 + num2){
    console.log("true")
}else{
    console.log("false")
}
