// (Game: heads or tails) Write a program that lets the user guess whether the flip of 
// a coin results in heads or tails. The program randomly generates an integer 0 or 1,
// which represents head or tail. The program prompts the user to enter a guess and 
// reports whether the guess is correct or incorrect.


let coin = Number(prompt("guess head or tail (head==0 , tail==1) "))
let random =  Math.floor(Math.random() * 2)
if (coin===random){
    console.log("corect")
}else{
    console.log("incorrect")
}