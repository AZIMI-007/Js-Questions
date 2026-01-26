// 6. Ask the user for three side lengths. Print whether they can form a valid triangle (sum of any two sides > third side).

let side1=Number(prompt("Enter the first side lenghts"))
let side2=Number(prompt("Enter the second side lenghts"))
let side3=Number(prompt("Enter the third side lenghts"))

if(side1+side2===side3 || side1+side3===side2 || side2+side3===side1){
    console.log("Yes this can be a triangle ")
}else{
    console.log("No This cant ba a triangle")
}
