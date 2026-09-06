// (Geometry: two circles) Write a program that prompts the user to enter the center 
// coordinates and radii of two circles and determines whether the second circle is 
// inside the first or overlaps with the first, as shown in Figure 3.10. (Hint: circle2 is 
// inside circle1 if the distance between the two centers 6 = |r1 - r2| and circle2 
// overlaps circle1 if the distance between the two centers <= r1 + r2. Test your 
// program to cover all cases.)

let x1 = Number(prompt("Enter x1     (circle 1"))
let y1 = Number(prompt("Enter y1     (circle 1"))
let r1 = Number(prompt("Enter r1     (circle 1"))
let x2 = Number(prompt("Enter x2     (circle 2"))
let y2 = Number(prompt("Enter y2     (circle 2"))
let r2 = Number(prompt("Enter r2     (circle 2"))

let distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
if(distance <= Math.abs(r1 - r2)){
  console.log("Circle 2 is inside Circle 1")
} 
else if(distance <= r1 + r2){
  console.log("Circle 2 overlaps Circle 1")
}else {
  console.log("Circle 2 does not overlap Circle 1")
}