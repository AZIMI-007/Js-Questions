// (Cost of driving) Write a program that prompts the user to enter the distance to 
// drive, the fuel efficiency of the car in miles per gallon, and the price per gallon, 
// and displays the cost of the trip. 


let distance = Number(prompt("Enter the driving distance:"))
let miles = Number(prompt("Enter the miles per gallon:"))
let price = Number(prompt("Enter the price per gallon:"))
let cost = (distance / miles) * price
console.log("The cost of driving is $ "+ cost)