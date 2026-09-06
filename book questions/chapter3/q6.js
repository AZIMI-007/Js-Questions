// (Health application: BMI) Revise Listing 3.4, ComputeAndInterpretBMI.java, to 
// let the user enter weight, feet, and inches. For example, if a person is 5 feet and 10 
// inches, you will enter 5 for feet and 10 for inches.

let weight = Number(prompt("Enter weight in pounds:"))
let feet = Number(prompt("Enter feet:"))
let inches = Number(prompt("Enter inches:"))
let allInches = feet * 12 + inches
let BMI = (weight * 703) / (allInches ** 2)
if (BMI < 18.5) {
    console.log("Underweight")
} else if (BMI < 25) {
    console.log("Normal")
} else if (BMI < 30) {
    console.log("Overweight")
} else {
    console.log("Obese")
}
