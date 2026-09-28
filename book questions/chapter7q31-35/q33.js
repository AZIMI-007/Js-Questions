// (Culture: Chinese Zodiac) Simplify Listing 3.9 using an array of strings to store 
// the animal names.


let animals = [
    "monkey",
    "rooster",
    "dog",
    "pig",
    "rat",
    "ox",
    "tiger",
    "rabbit",
    "dragon",
    "snake",
    "horse",
    "sheep"
]

let year = Number(prompt("Enter a year:"))

let remainder = year % 12

console.log(animals[remainder])