// (Game: lottery)Revise Listing 3.8, Lottery.java, to generate a lottery of a two
// digit number. The two digits in the number are distinct. (Hint: Generate the first 
// digit. Use a loop to continuously generate the second digit until it is different 
// from the first digit.)

let firstdigit = Math.floor(Math.random() * 10)
let seconddigit = Math.floor(Math.random() * 10)
while(seconddigit === firstdigit){
    seconddigit = Math.floor(Math.random() * 10)
}

let lottery = firstdigit * 10 + seconddigit;

console.log("Lottery number is:", lottery);
