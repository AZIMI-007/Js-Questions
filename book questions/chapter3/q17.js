//  (Game: scissor, rock, paper) Write a program that plays the popular scissor-rock
// paper game. (A scissor can cut a paper, a rock can knock a scissor, and a paper can 
// wrap a rock.) The program randomly generates a number 0,1, or 2 representing 
// scissor, rock, and paper. The program prompts the user to enter a number 0,1, or 
// 2 and displays a message indicating whether the user or the computer wins, loses, 
// or draws.
let user = Number(prompt(" Enter 1 , 2 , 3,  (1=scissor , 2=rock , 3=paper)"))
let random = Math.floor(Math.random()*3)+1
if (user === 1 && random === 2){
    console.log(" you lose   (you == scissor and random == rock")
}else if (user === 1 && random=== 3){
    console.log("you win (you == scissor and random == paper ")
}else if (user === 2 && random=== 1){
    console.log("you win (you == rock and random == scissor")
}else if (user === 2 && random=== 3){
    console.log("you lose (you == rock and random == paper")
}else if (user === 3 && random=== 1){
    console.log("you lose (you == paper  and random ==scissor ")
}else if (user === 3 && random=== 2){
    console.log("you win (you == paper and random == rock")
}else{
    console.log("try agin")
}