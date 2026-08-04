// (Count the letters in a string) Write a method that counts the number of letters in 
// a string using the following header:
// public static int countLetters(String s)
// Write a test program that prompts the user to enter a string and displays the num
// ber of letters in the string.


let userText = prompt("Enter a string")

function CounttheLetters (userText){
    let count = 0 
for (let i = 0 ; i < userText.length ; i++){
    let ch = userText[i]
    if((ch >= "A" && ch <= "Z") || ( ch >= "a" && ch <= "z")){
        count++
    }
}
return count
}
console.log( "the letters are "+CounttheLetters(userText))