// (Geometry: area of a triangle) Write a program that prompts the user to enter 
// three points (x1, y1), (x2, y2), (x3, y3) of a triangle and displays its area. 
// The formula for computing the area of a triangle is

let x1 = Number(prompt("Enter three points for a triangle:  (x1)"))
let y1 = Number(prompt("  (y1)"))
let x2 = Number(prompt("  (x2)"))
let y2 = Number(prompt("  (y2)"))
let x3 = Number(prompt("  (x3)"))
let y3 = Number(prompt("  (y3)"))
let side1 = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
let side2 = Math.sqrt((x3 - x2)**2 + (y3 - y2)**2);
let side3 = Math.sqrt((x1 - x3)**2 + (y1 - y3)**2)

let s = (side1 + side2 + side3) / 2
let area = Math.sqrt(s*(s - side1)*(s - side2)*(s - side3))
console.log(area)

