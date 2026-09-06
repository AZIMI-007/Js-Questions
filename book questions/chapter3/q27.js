// (Geometry: points in triangle?) Suppose a right triangle is placed in a plane as 
// shown below. The right-angle point is placed at (0, 0), and the other two points 
// are placed at (200, 0), and (0, 100). Write a program that prompts the user to enter 
// a point with x- and y-coordinates and determines whether the point is inside the 
// triangle.

let x = Number(prompt("Enter x"))
let y = Number(prompt("Enter y"))

if (x >= 0 && y >= 0 && y <= (-0.5 * x + 100)){
  console.log("point is inside ")
} else {
  console.log("Point is out side")
}
