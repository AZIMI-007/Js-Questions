//  (Compute the greatest common divisor) Another solution for Listing 5.9 to find 
// the greatest common divisor of two integers n1 and n2 is as follows: First find d
// to be the minimum of n1 and n2, then check whether d,d-1,d-2, ...,2, or 1 is 
// a divisor for both n1 and n2 in this order. The first such common divisor is the 
// greatest common divisor for n1 and n2. Write a program that prompts the user to 
// enter two positive integers and displays the gcd

let n1 = Number(prompt("Enter first positive integer:"));
let n2 = Number(prompt("Enter second positive integer:"));

let d = Math.min(n1, n2); 

while (d >= 1) {
    if (n1 % d === 0 && n2 % d === 0) {
        console.log("The GCD is: " + d);
        break; 
    }
    d--;
}