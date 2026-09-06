// (Geometry: point in a rectangle?) Write a program that prompts the user to enter 
// a point (x, y) and checks whether the point is within the rectangle centered at 
// (0, 0) with width 10 and height 5. For example, (2, 2) is inside the rectangle and 
// (6, 4) is outside the rectangle, as shown in Figure 3.7b. (Hint: A point is in the 
// rectangle if its horizontal distance to (0, 0) is less than or equal to 10 / 2 and its 
// vertical distance to (0, 0) is less than or equal to 5.0 / 2. Test your program to 
// cover all cases.)

let x1 = Number(prompt("Enter x1"))
let y1 = Number(prompt("Enter y1"))
let width = 10
let height = 5 
let a = width / 2 
let b = height / 2
if(x1 <= a && y1 <= b){
    console.log("point is in the rectangle ")
} else{
    console.log("point is not in the rectangle")
}