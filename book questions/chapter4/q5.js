// (Geometry: area of a regular polygon) A regular polygon is an n-sided polygon in 
// which all sides are of the same length and all angles have the same degree (i.e., the 
// polygon is both equilateral and equiangular). The formula for computing the area 
// of a regular polygon is
// Area = n * s2
// VideoNote
// Compute great circle distance
// 4 * tan¢p
// n ≤
// 152 
// Here, s is the length of a side. Write a program that prompts the user to enter the 
// number of sides and their length of a regular polygon and displays its area

let n = Number(prompt("Enter the number of sides"))
let s = Number(prompt("Enter the length of the side"))

let area = (n * s * s) / (4 * Math.tan(Math.PI / n))

console.log("The area of the polygon is " + area)

