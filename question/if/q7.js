// 7. Ask the user for a year. Print "Leap year" if divisible by 4 but not 100, or divisible by 400. Otherwise "Not leap year".

let year=Number(prompt("Enter a year"))
if (year%4===0 || year%400===0){
    console.log("This is a leap year")
}else
{
    console.log("This is not a leap Year")
}