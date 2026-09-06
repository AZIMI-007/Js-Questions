// (Count positive and negative numbers and compute the average of numbers) Write 
// a program that reads an unspecified number of integers, determines how many 
// positive and negative values have been read, and computes the total and average of 
// the input values (not counting zeros). Your program ends with the input 0. Display 
// the average as a floating-point number



let userNumber = 1
let total = 0
let counter = 0
let positive = 0
let negative = 0

while(userNumber != 0){
    userNumber = Number(prompt("enter a number \n Enter 0 to end"))
    if(userNumber === 0) break;
    total += userNumber
    counter++

    if ( userNumber < 0 ){
        negative++
    }
    else{
     positive++
    }
}

console.log( "total : "+ total)
console.log( "average : "+  total / counter )
console.log( "posetive : "+  positive )
console.log( "negative : "+  negative )