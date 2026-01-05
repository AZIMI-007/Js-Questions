// 9. Ask the user for coordinates of two points (x1, y1) and (x2, y2). Print which point is farther from the origin.


let x1=Number(prompt("enter the first coordinate (X1)"))
let y1=Number(prompt("enter the first coordinate (y1)"))
let x2=Number(prompt("enter the second coordinate (X2)"))
let y2=Number(prompt("enter the second coordinate (y2)"))

if(x1<x2 && y1<y2){
    console.log(x2,y2+" is farther from the origin")
}else if(x1>x2 && y1>y2){
    console.log(x1,y1+" is farther from the origin")
}else if(x1===x2 && y1===y2){
    console.log("both of them in the same point")
}else{
    console.log("points are in origin")
}