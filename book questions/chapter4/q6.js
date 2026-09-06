// Random points on a circle) Write a program that generates three random points 
// on a circle centered at (0, 0) with radius 40 and display three angles in a triangle 
// formed by these three points, as shown in Figure 4.7a. (Hint: Generate a random 
// angle a in radians between 0 and 2p, as shown in Figure 4.7b and the point deter
// mined by this angle is (r*cos(a), r*sin(a)).)
// x = r × cos(α) and y = r ×sin(α)
// 60 65

// FIGURE 4.7 (a) A triangle is formed from three random points on the circle. (b) A random 
// point on the circle can be generated using a random angle a. (c) A pentagon is centered at 
// (0, 0) with one point at the 0 o’clock position.



let radius = 40

let angle1 = Math.random() * 2 * Math.PI
let angle2 = Math.random() * 2 * Math.PI
let angle3 = Math.random() * 2 * Math.PI

let x1 = radius * Math.cos(angle1)
let y1 = radius * Math.sin(angle1)
let x2 = radius * Math.cos(angle2)
let y2 = radius * Math.sin(angle2)
let x3 = radius * Math.cos(angle3)
let y3 = radius * Math.sin(angle3)

let sideAB = Math.sqrt((x2-x1)**2 + (y2-y1)**2)
let sideBC = Math.sqrt((x3-x2)**2 + (y3-y2)**2)
let sideCA = Math.sqrt((x1-x3)**2 + (y1-y3)**2)

let angleA = Math.acos((sideBC**2 + sideCA**2 - sideAB**2) / (2 * sideBC * sideCA)) * 180 / Math.PI
let angleB = Math.acos((sideAB**2 + sideCA**2 - sideBC**2) / (2 * sideAB * sideCA)) * 180 / Math.PI
let angleC = Math.acos((sideAB**2 + sideBC**2 - sideCA**2) / (2 * sideAB * sideBC)) * 180 / Math.PI

console.log("Angle A:", angleA.toFixed(2))
console.log("Angle B:", angleB.toFixed(2))
console.log("Angle C:", angleC.toFixed(2))

