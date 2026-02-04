// (Geometry: two rectangles) Write a program that prompts the user to enter the 
// center x-, y-coordinates, width, and height of two rectangles and determines 
// whether the second rectangle is inside the first or overlaps with the first, as shown 
// in Figure 3.9. Test your program to cover all cases.
// (a) A rectangle is inside another one. (b) A rectangle overlaps another one.


let x1 = Number(prompt("x1"))
let y1 = Number(prompt("y1"))
let w1 = Number(prompt("width1"))
let h1 = Number(prompt("height1"))
let x2 = Number(prompt("x2"))
let y2 = Number(prompt("y2"))
let w2 = Number(prompt("width2"))
let h2 = Number(prompt("height2"))

let left1 = x1 - w1 / 2
let right1 = x1 + w1 / 2
let top1 = y1 + h1 / 2
let bottom1 = y1 - h1 / 2
let left2 = x2 - w2 / 2
let right2 = x2 + w2 / 2
let top2 = y2 + h2 / 2
let bottom2 = y2 - h2 / 2


if (
  left2 >= left1 && right2 <= right1 &&top2 <= top1 &&bottom2 >= bottom1){
  console.log("Rectangle 2 is inside Rectangle 1")
}else if (
  left2 < right1 && right2 > left1 && top2 > bottom1 && bottom2 < top1){
  console.log("Rectangle 2 overlaps Rectangle 1")
}else {
  console.log("Rectangle 2 does not overlap Rectangle 1")
}



