// (Science: wind-chill temperature) Programming Exercise 2.17 gives a formula 
// to compute the wind-chill temperature. The formula is valid for temperatures in 
// the range between −58ºF and 41ºF and wind speed greater than or equal to 2.
// Write a program that prompts the user to enter a temperature and a wind speed. 
// The program displays the wind-chill temperature if the input is valid; otherwise, 
// it displays a message indicating whether the temperature and/or wind speed is 
// invalid.


let ta = Number(prompt("Enter the temperature in Fahrenheit between -58°F and 41°F:"))
let v = Number(prompt("Enter the wind speed (>=2) in miles per hour: "))
let twc = 35.74 + 0.6215 * ta - 35.75 * Math.pow(v, 0.16) + 0.4275 * ta * Math.pow(v, 0.16)

if (ta >= -58 && ta <= 41 && v >= 2) {
  console.log("The wind chill index is " + twc)
} else if ((ta < -58 || ta > 41) && v < 2) {
  console.log("Both temperature and wind speed are invalid.")
} else if (ta < -58 || ta > 41) {
  console.log("The temperature is invalid.")
} else {
  console.log("The wind speed is invalid.")
}


