// (Business: check ISBN-10) Rewrite the Programming Exercise  3.9 by entering the 
// ISBN number as a string.

let d1 = Number(prompt("رقم 1 را وارد کنید:"))
let d2 = Number(prompt("رقم 2 را وارد کنید:"))
let d3 = Number(prompt("رقم 3 را وارد کنید:"))
let d4 = Number(prompt("رقم 4 را وارد کنید:"))
let d5 = Number(prompt("رقم 5 را وارد کنید:"))
let d6 = Number(prompt("رقم 6 را وارد کنید:"))
let d7 = Number(prompt("رقم 7 را وارد کنید:"))
let d8 = Number(prompt("رقم 8 را وارد کنید:"))
let d9 = Number(prompt("رقم 9 را وارد کنید:"))


let d10 = (d1*1 + d2*2 + d3*3 + d4*4 + d5*5 + d6*6 + d7*7 + d8*8 + d9*9) % 11
if (d10 === 10) {
    console.log("شماره ISBN-10 کامل: " + d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + "X")
} else {
    console.log("شماره ISBN-10 کامل: " + d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10)
}
