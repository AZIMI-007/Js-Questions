// 18. Middle Number Ask for three numbers. Print the one that is neither the largest nor the smallest (the middle value).

let num1=Number(prompt("عدد اول را وارد کنید"))
let num2=Number(prompt("عدد دوم را وارد کنید"))
let num3=Number(prompt("عدد سوم را وارد کنید"))

if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
    console.log(num1);
} else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
    console.log(num2);
} else {
    console.log(num3);
}