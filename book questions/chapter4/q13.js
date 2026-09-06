// (Vowel or consonant?) Write a program that prompts the user to enter a letter and 
// check whether the letter is a vowel or consonant.
// 4.13 (Vowel or consonant?) Write a program that prompts the user to enter a letter and 
// check whether the letter is a vowel or consonant. Here is a sample run:

var user1 = prompt('Enter a letter')
user = user1.toUpperCase()

switch(user){
     case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("vowel")
        break
    default : 
    console.log("consonsnt")    
}