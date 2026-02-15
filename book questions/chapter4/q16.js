// (Random character) Write a program that displays a random uppercase letter 
// using the Math.random() method.


let randomAscii = Math.floor(Math.random() * (90 - 65 + 1)) + 65
let randomLetter = String.fromCharCode(randomAscii)
console.log(randomLetter)


