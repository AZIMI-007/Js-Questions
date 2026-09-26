// (Simulation: coupon collector’s problem) Coupon collector is a classic statistics 
// problem with many practical applications. The problem is to pick objects from 
// a set of objects repeatedly and find out how many picks are needed for all the objects to be picked at least once. A variation of the problem is to pick cards from 
// a shuffled deck of 52 cards repeatedly and find out how many picks are needed 
// before you see one of each suit. Assume a picked card is placed back in the deck 
// before picking another. Write a program to simulate the number of picks needed 
// to get four cards from each suit and display the four cards picked (it is possible a 
// card may be picked twice). Here is a sample run of the program: 


let suits = ["Hearts", "Diamonds", "Clubs", "Spades"]

let counts = [0, 0, 0, 0]

let total = 0

let pickedCards = []

while(counts[0] < 4 || counts[1] < 4 || counts[2] < 4 || counts[3] < 4){


    let randomSuit = Math.floor(Math.random() * 4)

    
    let randomCard = Math.floor(Math.random() * 13) + 1

    
    counts[randomSuit]++

    
    total++

    let card = randomCard + " of " + suits[randomSuit]

    
    pickedCards.push(card)
}

console.log("Total picks:", total)

console.log("Picked cards:")

for(let i = 0; i < pickedCards.length; i++){
    console.log(pickedCards[i])
}
 