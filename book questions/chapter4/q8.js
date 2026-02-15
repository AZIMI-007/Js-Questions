// (Find the character of an ASCII code) Write a program that receives an ASCII code 
// (an integer between 0 and 127) and displays its character.
let number = Number(prompt("Enter a number between 0 - 127"))
let num = String.fromCharCode(number)
if (number <= 127 && number >= 0){
    console.log(num)
}else{
    console.log("try agin")
} 