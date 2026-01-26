// (Physics: finding runway length) Given an airplane’s acceleration a and take-off 
// speed v, you can compute the minimum runway length needed for an airplane to 
// take off using the following formula:
// length = v2
// 2a
// Write a program that prompts the user to enter v in meters/second (m/s) and the 
// acceleration a in meters/second squared (m/s2), and displays the minimum run
// way length.

let v = Number(prompt("Enter speed in m/s"))
let a = Number(prompt("Enter acceleration in m/s"))
let run = (v**2) / (2*a)
console.log("The minimum runway length for this airplane is "+  run)