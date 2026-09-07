// (Game: scissor, rock, paper) Programming Exercise  3.17 gives a program that 
// plays the scissor-rock-paper game. Revise the program to let the user continu
// ously play until either the user or the computer wins more than two times than its 
// opponent.

let userScore = 0
let computerScore = 0

while (Math.abs(userScore - computerScore) <= 2) {

    let user = Number(prompt("Enter 1, 2, 3 (1=scissor, 2=rock, 3=paper)"))
    let random = Math.floor(Math.random() * 3) + 1

    console.log( "your choice " + user + "  ==>       Computer choice: " + random)

    if (user === 1 && random === 2) {
        console.log("You lose (scissor vs rock)")
        computerScore++
    } else if (user === 1 && random === 3) {
        console.log("You win (scissor vs paper)")
        userScore++
    } else if (user === 2 && random === 1) {
        console.log("You win (rock vs scissor)")
        userScore++
    } else if (user === 2 && random === 3) {
        console.log("You lose (rock vs paper)")
        computerScore++
    } else if (user === 3 && random === 1) {
        console.log("You lose (paper vs scissor)")
        computerScore++
    } else if (user === 3 && random === 2) {
        console.log("You win (paper vs rock)")
        userScore++
    } else if (user === random) {
        console.log("Draw ")
    } else {
        console.log("Invalid input, try again")
    }

    console.log("Score => You:", userScore, "Computer:", computerScore)
}

console.log("Game Over")

if (userScore > computerScore) {
    console.log(" You are the final winner")
} else {
    console.log(" Computer is the final winner")
}