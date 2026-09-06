// (The MyTriangle class) Create a class named MyTriangle that contains the 
// following two methods:
// /** Return true if the sum of any two sides is 
//  *  greater than the third side. */
// public static boolean isValid(
// double side1, double side2, double side3)
// /** Return the area of the triangle. */ 
// public static double area(
// double side1, double side2, double side3)
// Write a test program that reads three sides for a triangle and computes the area if 
// the input is valid. Otherwise, it displays that the input is invalid. The formula for 
// computing the area of a triangle is given in Programming Exercise 2.19.


function area(n1, n2, n3) {
    let s = (n1 + n2 + n3) / 2;

    let Area = Math.sqrt(
        s * (s - n1) * (s - n2) * (s - n3)
    );

    return Area;
}
function MyTriangle(n1 , n2 , n3 ){
    if((n1 + n2 > n3 ) && (n2 + n3 > n1 ) && (n1 + n3 > n2)){
        console.log( "the area of triangle is  "  +   area(n1 , n2 , n3 ).toFixed(4))
    }else{
        console.log("this cant be a triangle")
    }

}

let n1 = Number(prompt("Enter side 1"))
let n2 = Number(prompt("Enter side 2"))
let n3 = Number(prompt("Enter side 3"))

MyTriangle(n1, n2, n3);
