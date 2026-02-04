// (Compute the perimeter of a triangle) Write a program that reads three edges for 
// a triangle and computes the perimeter if the input is valid. Otherwise, display that 
// the input is invalid. The input is valid if the sum of every pair of two edges is 
// greater than the remaining edge.

let g1 = Number(prompt("Enter the first edges "))
let g2 = Number(prompt("Enter the first edges "))
let g3 = Number(prompt("Enter the first edges "))
let perimeter = g1 + g2 + g3 
if(g1 + g2 >= g3 || g2 + g3 >= g1 || g3 + g1 >= g2){
    console.log(perimeter)
}else{
    console.log("invalid")
}