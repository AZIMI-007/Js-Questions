// 11. Ask the user for a two-digit number. Print whether the tens digit is larger, smaller, or equal to the ones digit.


let number=Number(prompt("enter a number (10,99"))
let one=number%10
let num=number/10
let ten=Math.floor(num)
if(ten<one){
    console.log("رقم ده ها کوجکتر از یکها هست")
}else if(ten>one){
    console.log("رقم ده ها یزرگتر از یکها هست")
}