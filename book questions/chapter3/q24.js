// (Game: pick a card) Write a program that simulates picking a card from a deck 
// of 52 cards. Your program should display the rank (Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10,
// Jack, Queen, King) and suit (Clubs, Diamonds, Hearts, Spades) of the card.


let rank = Math.floor(Math.random() * 13) + 1


if (rank === 1) {
    console.log("Ace") 
} else if (rank === 11) {
    console.log("jake") 
} else if (rank === 12) {
    console.log("queen") 
} else  {
    console.log("king") 
}


let suit = Math.floor(Math.random() * 4) + 1

if (suit === 1) {
    console.log("خشت") 
} else if (suit === 2) {
    console.log("پشه") 
} else if (suit === 3) {
    console.log("نار") 
} else {
    console.log("قره") 
}





