// (Math: combinations) Write a program that prompts the user to enter 10 integers 
// and displays all combinations of picking two numbers from the 10.

let numbers = []
for(let i = 0 ; i < 10 ; i++){
    let user = Number(prompt("Enter ten numbers "))
    numbers.push(user)
    
}

for(let i = 0 ; i < numbers.length ; i++){
   for(let j = i + 1; j < numbers.length ; j++){
    console.log(numbers[i], numbers[j])

    }
}