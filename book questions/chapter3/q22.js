// (Geometry: point in a circle?) Write a program that prompts the user to enter a 
// point (x, y) and checks whether the point is within the circle centered at (0, 0)
// with radius 10. For example, (4, 5) is inside the circle and (9, 9) is outside the 
// circle, as shown in Figure 3.7a.
// (Hint: A point is in the circle if its distance to (0, 0) is less than or equal to 10.
// The formula for computing the distance is 2(x2- x1)2 + (y2- y1)2. Test your 
// program to cover all cases.)

let x1 = Number(prompt("Enter x1 "))
let y1 = Number(prompt("Enter y1 "))
let x2 = 0
let y2 = 0
let r = 10
let result = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

if(result < r){
    console.log("point ( "+x1 , x2  , y1 , y2 +") is in the circle")
}else{
   console.log("point ( "+x1 , x2  , y1 , y2 +") is not in the circle") 
}
