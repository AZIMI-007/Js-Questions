// (Geometry: great circle distance) The great circle distance is the distance between 
// two points on the surface of a sphere. Let (x1, y1) and (x2, y2) be the geographi
// cal latitude and longitude of two points. The great circle distance between the two 
// points can be computed using the following formula:
// d = radius * arccos(sin(x1) * sin(x2) + cos(x1) * cos(x2) * cos(y1- y2))
// Write a program that prompts the user to enter the latitude and longitude of two 
// points on the earth in degrees and displays its great circle distance. The average 
// earth radius is 6,371.01 km. Note that you need to convert the degrees into radians 
// using the Math.toRadians method since the Java trigonometric methods use 
// radians. The latitude and longitude degrees in the formula are for north and west. 
// Use negative to indicate south and east degrees



let x1 = Number(prompt("Enter latitude 1 in degrees"))
let y1 = Number(prompt("Enter longitude 1 in degrees"))
let x2 = Number(prompt("Enter latitude 2 in degrees"))
let y2 = Number(prompt("Enter longitude 2 in degrees"))

let radius = 6371.01


x1 = x1 * Math.PI / 180
y1 = y1 * Math.PI / 180
x2 = x2 * Math.PI / 180
y2 = y2 * Math.PI / 180

let d = radius * Math.acos( Math.sin(x1) * Math.sin(x2) +
  Math.cos(x1) * Math.cos(x2) * Math.cos(y1 - y2) )

console.log("The distance between the two points is " + d + " km")
