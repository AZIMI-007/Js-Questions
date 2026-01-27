// // (Game: lottery) Revise Listing 3.8, Lottery.java, to generate a lottery of a three
// // digit number. The program prompts the user to enter a three-digit number and 
// // determines whether the user wins according to the following rules:
// // 1. If the user input matches the lottery number in the exact order, the award is 
// // $10,000.
// // 2. If all digits in the user input match all digits in the lottery number, the award is 
// // $3,000.
// // 3. If one digit in the user input matches a digit in the lottery number, the award is 
// // $1,000.



let lotterynumber = Math.floor(Math.random() * 900) + 100
let usernumber = Number(prompt('Enter a number (100 , 999)'))

let l1 = Math.floor(lotterynumber / 100)
let l2 = Math.floor((lotterynumber % 100) / 10)
let l3 = lotterynumber % 10

let user1 = Math.floor(usernumber / 100)
let user2 = Math.floor((usernumber % 100) / 10)
let user3 = usernumber % 10

if (usernumber === lotterynumber) {
  console.log(' You win $10,000')
}else if (
  (user1 === l1 || user1 === l2 || user1 === l3) &&
  (user2 === l1 || user2 === l2 || user2 === l3) &&
  (user3 === l1 || user3 === l2 || user3 === l3)
){
  console.log(' You win $3,000')
}else if (
  user1 === l1 || user1 === l2 || user1 === l3 ||
  user2 === l1 || user2 === l2 || user2 === l3 ||
  user3 === l1 || user3 === l2 || user3 === l3
){
  console.log('  You win $1,000')
}else {
  console.log('lose' )
}

console.log('Lottery number == ' + lotterynumber)

