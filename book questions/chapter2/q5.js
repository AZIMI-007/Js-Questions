// (Financial application: calculate tips) Write a program that reads the subtotal 
// and the gratuity rate, then computes the gratuity and total. For example, if the 
// user enters 10 for subtotal and 15% for gratuity rate, the program displays $1.5
// as gratuity and $11.5 as total


let userSsubtotal = Number(prompt("Enter the subtotal rate"))
let userGratuity = Number(prompt("Enter the gratuity rate"))
let gratuity = userSsubtotal * userGratuity / 100
let total = userSsubtotal + gratuity
console.log("The grstuity is " + gratuity + "Af and total is "+total +"AF")