
// 8. Ask the user for electricity units consumed. Calculate bill:
// First 100 units = free
// Next 100 units = 5 per unit
// Above 200 units = 10 per unit
// Print the bill amount.


let electricityUnits=Number(prompt("Enter your electricity units consumed "))
if (electricityUnits<=100){
    console.log("free")
}else if (electricityUnits<=200){
    console.log((electricityUnits-100)*5)
}else(electricityUnits>200)
{console.log((electricityUnits-200)*10)}
    

