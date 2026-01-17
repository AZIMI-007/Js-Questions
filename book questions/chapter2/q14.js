// (Health application: computing BMI) Body Mass Index (BMI) is a measure of 
// health on weight. It can be calculated by taking your weight in kilograms and 
// dividing by the square of your height in meters. Write a program that prompts the 
// user to enter a weight in pounds and height in inches and displays the BMI. Note 
// that one pound is 0.45359237 kilograms and one inch is 0.0254 meters. Here is 
// a sample run:


let userWight = Number(prompt("Enter weight in pounds:"))
let userHeight = Number(prompt("Enter height in inches: "))
let kg = userWight * 0.45359237 
let m = userHeight *  0.0254
let BMI =  kg / (m * m)
console.log("BMI is "+ BMI)