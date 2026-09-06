// (Geometry: area of a hexagon) The area of a hexagon can be computed using the 
// following formula (s is the length of a side):
// Area = 6 * s2
// 4 * tan¢p
// 6 ≤
// // Write a program that prompts the user to enter the side of a hexagon and displays 

let s = Number(prompt("Enter the side of the hexagon"))

let area = (6 * s * s) / (4 * Math.tan(Math.PI / 6))

console.log("The area of the hexagon is " + area)
