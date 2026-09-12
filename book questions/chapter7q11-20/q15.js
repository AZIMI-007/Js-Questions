// (Eliminate duplicates) Write a method that returns a new array by eliminating the 
// duplicate values in the array using the following method header:
// public static int[] eliminateDuplicates(int[] list)
// Write a test program that reads in ten integers, invokes the method, and displays 
// the result. Here is the sample run of the program:


function eliminateDuplicates(list){
    let newArray = []
    for(let i = 0 ; i < list.length  ; i++){
        if(!newArray.includes(list[i])){
            newArray.push(list[i])
        }
    }
    return newArray
}

let numbers = []
for(let i = 0 ; i < 10 ; i++){
    let user = Number(prompt("Enter ten numbers "))
    numbers.push(user)
    
}

let result = eliminateDuplicates(numbers)
console.log(result)