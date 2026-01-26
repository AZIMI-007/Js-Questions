// 16. Ask for two numbers and check whose absolute value is bigger.


let num1=Number(prompt("Enter the first number"))
let num2=Number(prompt("Enter the second number"))
let num3=Math.abs(num1)
let num4=Math.abs(num2)
if (num3>num4){
    console.log("the first one has the begest absolute value ")
}else if(num4>num3){
    console.log(" the second one has the begest absolute value")
}else{
    console.log("both have the same absolute value")
}



