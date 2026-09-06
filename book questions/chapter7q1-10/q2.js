// (Reverse the numbers entered) Write a program that reads ten integers and dis
// plays them in the reverse of the order in which they were read

let Numbers = []

for(let i = 0 ; i < 10 ; i++){
    let userNumbers = Number(prompt("Enter ten numbers "))
    Numbers.push(userNumbers)
}
for (let i = 9; i >= 0; i--) {
console.log(Numbers[i])
}