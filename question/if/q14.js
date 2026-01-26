// 14. Ask the user for two numbers and an operator (+, -, *, /). Print the result of the operation.

let num1=Number(prompt("Enter the first number"))
let num2=Number(prompt("Enter the second number"))
let operator=prompt("Enter one of these operators ( + , - , * , / )")
if (operator==="+"){
    console.log(num1+num2)
}else if(operator==="-"){
    console.log(num1-num2)
}else if(operator==="*"){
    console.log(num1*num2)
}else if(operator==="/"){
    console.log(num1/num2)
}else{isNaN(operator)
    console.log("invaled")
}
