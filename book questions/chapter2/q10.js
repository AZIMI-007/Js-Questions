// (Science: calculating energy) Write a program that calculates the energy needed 
// to heat water from an initial temperature to a final temperature. Your program 
// should prompt the user to enter the amount of water in kilograms and the initial 
// and final temperatures of the water. The formula to compute the energy is
// Q = M * (finalTemperature – initialTemperature) * 4184
// where M is the weight of water in kilograms, temperatures are in degrees Celsius, 
// and energy Q is measured in joules

let M = Number(prompt("nter the amount of water in kilograms:"))
let initial = Number(prompt("Enter the initial temperature:"))
let final = Number(prompt("Enter the final temperature:"))
let q = M * (final - initial) * 4184
console.log("The energy needed is "+ q)