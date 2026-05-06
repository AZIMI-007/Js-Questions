// (Process string) Write a program that prompts the user to enter a string and dis
// plays the characters at odd positions

let user = prompt("enter a text");

for (let i = 1; i < user.length; i += 2) {
    console.log(user[i]);
}