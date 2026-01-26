// 2.16 (Geometry: area of a hexagon) Write a program that prompts the user to enter the 
// side of a hexagon and displays its area. The formula for computing the area of a 
// hexagon is 
// Area = 323
// 2 s2,
// where s is the length of a side. 

let s = Number(prompt("Enter the side of a hexagon:"))
let area = ( 3 * Math.sqrt(3) / 2 ) * s**2
console.log("The area of the hexagon is "+area)