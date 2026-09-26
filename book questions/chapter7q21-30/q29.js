// (Game: pick four cards) Write a program that picks four cards from a deck of 52 
// cards and computes their sum. An Ace, King, Queen, and Jack represent 1, 13, 
// 12, and 11, respectively. Your program should display the number of picks that 
// yields the sum of 24.




let picks = 0
let sum = 0

while (sum !== 24) {

    let cards = []

    
    while (cards.length < 4) {

        let card = Math.floor(Math.random() * 52) + 1

        if (!cards.includes(card)) {
            cards.push(card)
        }
    }

    sum = 0

    
    for (let i = 0; i < 4; i++) {

        let value = ((cards[i] - 1) % 13) + 1

        sum += value
    }

    picks++
}

console.log("Number of picks:", picks)
console.log("Sum:", sum)