// (Physics: acceleration) Average acceleration is defined as the change of velocity 
// divided by the time taken to make the change, as shown in the following formula:
// a = v1- v0
// t
// Write a program that prompts the user to enter the starting velocity v0 in meters/
// second, the ending velocity v1 in meters/second, and the time span t in seconds, 
// and displays the average acceleration


let v0 = Number(prompt("Enter v0"))
let v1 = Number(prompt("Enter v1"))
let t = Number(prompt("Enter t"))
let a = (v1 - v0) / t
console.log("The average acceleration is "+ a)