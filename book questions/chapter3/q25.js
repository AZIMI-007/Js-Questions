// (Geometry: intersecting point) Two points on line 1 are given as (x1, y1) and (x2,
// y2) and on line 2 as (x3, y3) and (x4, y4), as shown in Figure 3.8a–b. 
// The intersecting point of the two lines can be found by solving the following 
// linear equation:
// (y1- y2)x- (x1- x2)y = (y1- y2)x1- (x1- x2)y1
// (y3- y4)x- (x3- x4)y = (y3- y4)x3- (x3- x4)y3
// This linear equation can be solved using Cramer’s rule (see Programming Exer
// cise 3.3). If the equation has no solutions, the two lines are parallel (Figure 3.8c). 
// Write a program that prompts the user to enter four points and displays the inter



let x1 = Number(prompt("x1 "))
let y1 = Number(prompt("y1 "))
let x2 = Number(prompt("x2 "))
let y2 = Number(prompt("y2 "))
let x3 = Number(prompt("x3 "))
let y3 = Number(prompt("y3 "))
let x4 = Number(prompt("x4 "))
let y4 = Number(prompt("y4 "))
let a1 = y1 - y2
let b1 = x2 - x1
let c1 = a1 * x1 + b1 * y1
let a2 = y3 - y4
let b2 = x4 - x3
let c2 = a2 * x3 + b2 * y3
if ((a1 * b2 - a2 * b1) === 0) {
    console.log("خطوط موازی هستند و نقطه تقاطع ندارند")
} else {
    
    let x = (c1 * b2 - c2 * b1) / (a1 * b2 - a2 * b1)
    let y = (a1 * c2 - a2 * c1) / (a1 * b2 - a2 * b1)

    console.log("نقطه تقاطع دو خط (" + x + ", " + y + ")")
}
