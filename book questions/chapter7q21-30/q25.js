// (Algebra: solve quadratic equations) Write a method for solving a quadratic 
// equation using the following header:
// public static int solveQuadratic(double[] eqn, double[] roots)
// The coefficients of a quadratic equation ax2 + bx + c = 0 are passed to the 
// array eqn and the real roots are stored in roots. The method returns the num
// ber of real roots. See Programming Exercise 3.1 on how to solve a quadratic 
// equation.
// Write a program that prompts the user to enter values for a, b, and c and displays 
// the number of real roots and all real roots.
 
function solveQuadratic(eqn, roots) {
    let a = eqn[0]
    let b = eqn[1]
    let c = eqn[2]

    let discriminant = b * b - 4 * a * c

    if (discriminant > 0) {
        roots[0] = (-b + Math.sqrt(discriminant)) / (2 * a)
        roots[1] = (-b - Math.sqrt(discriminant)) / (2 * a)

        return 2
    }
    else if (discriminant === 0) {
        roots[0] = -b / (2 * a)

        return 1
    }
    else {
        return 0
    }
}



let a = Number(prompt("Enter a:"))
let b = Number(prompt("Enter b:"))
let c = Number(prompt("Enter c:"))


let eqn = [a, b, c]

let roots = []


let numberOfRoots = solveQuadratic(eqn, roots)

console.log("Number of real roots:", numberOfRoots)

if (numberOfRoots === 2) {
    console.log("Roots:", roots[0], roots[1])
}
else if (numberOfRoots === 1) {
    console.log("Root:", roots[0])
}
else {
    console.log("The equation has no real roots.")
}