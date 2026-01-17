// (Compute the volume of a cylinder) Write a program that reads in the radius 
// and length of a cylinder and computes the area and volume using the following 
// formulas:
// area = radius * radius * p
// volume = area * length

let radius= Number(prompt("Enter the redius of a cylinder"))
let lenght = Number(prompt("Enter the lenght of a cylinder"))
let area = radius * radius * 3.14
let volume = area * lenght
console.log("the area is "+area)
console.log("the volume is "+volume)




