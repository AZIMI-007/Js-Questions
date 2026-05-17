// (Display an integer reversed) Write a method with the following header to display 
// an integer in reverse order:
// public static void reverse(int number)
// For example, reverse(3456) displays 6543. Write a test program that prompts 
// the user to enter an integer and displays its reversal.
function reversNumber(n) {
let revers = 0 
while(n > 0){
let digit = n % 10 
 revers = revers * 10 + digit;
n = Math.floor(n / 10);
}
return revers ;
}
let number = Number(prompt("Enter a number "))
console.log("the revers of your number is " + reversNumber(number))