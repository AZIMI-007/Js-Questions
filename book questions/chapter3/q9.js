// (Business: check ISBN-10) An ISBN-10 (International Standard Book Number) 
// consists of 10 digits: d1d2d3d4d5d6d7d8d9d10. The last digit, d10, is a checksum, 
// which is calculated from the other nine digits using the following formula:
// (d1 * 1 + d2 * 2 + d3 * 3 + d4 * 4 + d5 * 5 +
// d6 * 6 + d7 * 7 + d8 * 8 + d9 * 9)%11
// If the checksum is 10, the last digit is denoted as X according to the ISBN-10 
// convention. Write a program that prompts the user to enter the first 9 digits and 
// displays the 10-digit ISBN (including leading zeros). Your program should read 
// the input as an integer.

let d1 = Number(prompt("Enter d1"))
let d2 = Number(prompt("Enter d2"))
let d3 = Number(prompt("Enter d3"))
let d4 = Number(prompt("Enter d4"))
let d5 = Number(prompt("Enter d5"))
let d6 = Number(prompt("Enter d6"))
let d7 = Number(prompt("Enter d7"))
let d8 = Number(prompt("Enter d8"))
let d9 = Number(prompt("Enter d9"))
let d10 = (d1 * 1 + d2 * 2 + d3 * 3 + d4 * 4 + d5 * 5 +
 d6 * 6 + d7 * 7 + d8 * 8 + d9 * 9)%11

 if (d10===10){
    console.log("The ISBN-10 number is "+d1,d2,d3,d4,d5,d6,d7,d8,d9+" x")
 }else{
    console.log("The ISBN-10 number is "+d1,d2,d3,d4,d5,d6,d7,d8,d9,d10)
 }