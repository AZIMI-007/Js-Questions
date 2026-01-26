// 7. Ask the user for two points (x1, y1) and (x2, y2). Compute the distance between them:

let x1=Number(prompt("writh a number (x1) "))
let y1=Number(prompt("writh a number (y1) "))
let x2=Number(prompt("writh a number (x2) "))
let y2=Number(prompt("writh a number (y2) "))
let distance=Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
console.log(distance)