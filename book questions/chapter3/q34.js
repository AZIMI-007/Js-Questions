// (Geometry: point on line segment) Programming Exercise 3.32 shows how to test 
// whether a point is on an unbounded line. Revise Programming Exercise 3.32 to 
// test whether a point is on a line segment. Write a program that prompts the user 
// to enter the three points for p0, p1, and p2 and displays whether p2 is on the line 
// segment from p0 to p1


let x0 = Number(prompt("Enter x0  "))
let y0 = Number(prompt("Enter y0  "))

let x1 = Number(prompt("Ente rx1  "))
let y1 = Number(prompt("Enter y1  "))

let x2 = Number(prompt("Enter x2  "))
let y2 = Number(prompt("Enter y2  "))

let value = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0)

if( value === 0 && 
    ((x2 >= x0 && x2 <= x1) || (x2 >= x1 && x2 <= x0)) && 
    ((y2 >= y0 && y2 <= y1) || (y2 >= y1 && y2 <= y0))
){
  console.log("p2 is on the line segment from p0 to p1")
}else{
  console.log("p2 is not on the line segment from p0 to p1")
}