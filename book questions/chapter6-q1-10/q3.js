// (Palindrome integer) Write the methods with the following headers
// // Return the reversal of an integer, i.e., reverse(456) returns 654
// public static int reverse(int number)
// // Return true if number is a palindrome
// public static boolean isPalindrome(int number)
// Use the reverse method to implement isPalindrome. A number is a palin
// drome if its reversal is the same as itself. Write a test program that prompts the 
// user to enter an integer and reports whether the integer is a palindrome.
 
function reversNumber(n) {
let revers = 0 
while(n > 0){
let digit = n % 10 
 revers = revers * 10 + digit;
n = Math.floor(n / 10);
}
return revers ;
}

function palindrome(n) {
return n === reversNumber(n)
}
let number = Number(prompt("enter a number")) 
if(palindrome(number)){

    console.log(" your int is a Palindrome Number");
}else{

    console.log("your int is not  a Palindrome Number");
}