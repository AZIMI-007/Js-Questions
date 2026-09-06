
// (Game: craps) Craps is a popular dice game played in casinos. Write a program 
// to play a variation of the game, as follows:
// Roll two dice. Each die has six faces representing values 1, 2, …, and 6, respec
// tively. Check the sum of the two dice. If the sum is 2, 3, or 12 (called craps), you 
// lose; if the sum is 7 or 11 (called natural), you win; if the sum is another value 
// (i.e., 4, 5, 6, 8, 9, or 10), a point is established. Continue to roll the dice until either 
// a 7 or the same point value is rolled. If 7 is rolled, you lose. Otherwise, you win.
// Your program acts as a single player.





function rollDice() {
    let dice1 = Math.floor(Math.random() * 6) + 1
    let dice2 = Math.floor(Math.random() * 6) + 1

    return [dice1, dice2]
}

let dice = rollDice()
let dice1 = dice[0]
let dice2 = dice[1]
let sum = dice1 + dice2

console.log("You rolled " + dice1 + " + " + dice2 + " = " + sum)

if (sum === 2 || sum === 3 || sum === 12) {
    console.log("You lose")
}
else if (sum === 7 || sum === 11) {
    console.log("You win")
}
else {
    let point = sum

    console.log("point is " + point)

    while (true) {
        dice = rollDice()
        dice1 = dice[0]
        dice2 = dice[1]
        sum = dice1 + dice2

        console.log("You rolled " + dice1 + " + " + dice2 + " = " + sum)

        if (sum === 7) {
            console.log("You lose")
            break
        }

        if (sum === point) {
            console.log("You win")
            break
        }
    }
}