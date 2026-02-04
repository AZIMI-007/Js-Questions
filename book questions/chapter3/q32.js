// (Geometry: point position) Given a directed line from point p0(x0, y0) to p1(x1, 
// y1), you can use the following condition to decide whether a point p2(x2, y2) is 
// on the left of the line, on the right, or on the same line (see Figure 3.11):
// (x1- x0)*(y2- y0)- (x2- x0)*(y1- y0) c
// p1
// 70p2is on the left side of the line
// =0p2isonthesameline
// 60p2is on the right side of the line

let x0 = Number(prompt("Enter x0  "))
let y0 = Number(prompt("Enter y0  "))

let x1 = Number(prompt("Ente rx1  "))
let y1 = Number(prompt("Enter y1  "))

let x2 = Number(prompt("Enter x2  "))
let y2 = Number(prompt("Enter y2  "))

let value = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0)

if(value > 0) {
  console.log("p2 is in left")
}else if (value === 0) {
  console.log("p2 is on line")
}else {
  console.log("p2 is in righ")
}
