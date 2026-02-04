// (Cost of shipping) A shipping company uses the following function to calcu
// late the cost (in dollars) of shipping based on the weight of the package (in 
// pounds). 
// c(w)=d
// 3.5,if06w6=1
// 5.5,if16w6=3
// 8.5,if36w6=10
// 10.5,if106w6=20
// Write a program that prompts the user to enter the weight of the package and 
// display the shipping cost. If the weight is greater than 50, display a message “the 
// package cannot be shipped.”


let weight = Number(prompt("Enter the weight of the package (in pounds)"))


if (weight > 0 && weight <= 1){
    console.log ("3.5") 
}else if (weight > 1 && weight <= 3){
    console.log("5.5") 
}else if (weight > 3 && weight <= 10){
    console.log("8.5")
}else if (weight > 10 && weight <= 20){
    console.log("10.5")
}else{
   console.log("package cannot be shipped")
}