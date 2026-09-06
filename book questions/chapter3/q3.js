// (Game: add three numbers) The program in Listing 3.1, AdditionQuiz.java, gen
// erates two integers and prompts the user to enter the sum of these two integers. 
// Revise the program to generate three single-digit integers and prompt the user to 
// enter the sum of these three integers.(Algebra: solve 2 * 2 linear equations) A linear equation can be solved using 
// Cramer’s rule given in Programming Exercise 1.13. Write a program that prompts 
// the user to enter a, b, c, d, e, and f and displays the result. If ad- bc is 0, report 
// that “The equation has no solution.”

let a = Number(prompt("Enter a"))
let b = Number(prompt("Enter b"))
let c = Number(prompt("Enter c"))
let d = Number(prompt("Enter d"))
let e = Number(prompt("Enter e"))
let f = Number(prompt("Enter f"))
let x = (e * d - b * f) / (a * d - b * c)
let y = (a * f - e * c) / (a * d - b * c)
if ((a * d) - (b * c) === 0){
    console.log("The equation has no solution")
}else{
    console.log("x is "+ x +" and y is "+y)
}