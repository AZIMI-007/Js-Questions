// (Corner point coordinates) Suppose a pentagon is centered at (0, 0) with one point 
// at the 0 o’clock position, as shown in Figure 4.7c. Write a program that prompts 
// the user to enter the radius of the bounding circle of a pentagon and displays the 
// coordinates of the five corner points on the pentagon.

var r = Number(prompt('Enter the radius'))
var n = 5
var farmole = (2 * Math.PI) / n  

var x0 = r * Math.cos(0 * farmole)
var y0 = r * Math.sin(0 * farmole)

var x1 = r * Math.cos(1 * farmole)
var y1 = r * Math.sin(1 * farmole)

var x2 = r * Math.cos(2 * farmole)
var y2 = r * Math.sin(2 * farmole)

var x3 = r * Math.cos(3 * farmole)
var y3 = r * Math.sin(3 * farmole)

var x4 = r * Math.cos(4 * farmole)
var y4 = r * Math.sin(4 * farmole)

console.log(x0, y0)
console.log(x1, y1)
console.log(x2, y2)
console.log(x3, y3)
console.log(x4, y4)