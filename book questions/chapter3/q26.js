// (Use the &&, || and ^ operators) Write a program that prompts the user to enter 
// an integer and determines whether it is divisible by 5 and 6, whether it is divisible 
// by 5 or 6, and whether it is divisible by 5 or 6, but not both. Here is a sample run 
// of this program:

let number = Number(prompt("یک عدد وارد کنید"))

if(number % 5 === 0 && number % 6 === 0){
    console.log(number + " بر 5 و 6 بخش‌پذیر است")
}else{
    console.log(number + " بر 5 و 6 بخش‌پذیر نیست")
}

if(number % 5 === 0 || number % 6 === 0){
    console.log(number + " بر 5 یا 6 بخش‌پذیر است")
}else{
    console.log(number + " بر 5 یا 6 بخش‌پذیر نیست")
}


if((number % 5 === 0) ^ (number % 6 === 0)){
    console.log(number + " بر 5 یا 6 ولی نه هر دو بخش‌پذیر است")
}else{
    console.log(number + " بر 5 یا 6 ولی نه هر دو بخش‌پذیراست")
}

