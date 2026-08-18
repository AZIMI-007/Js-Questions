// (Occurrences of a specified character) Write a method that finds the number of 
// occurrences of a specified character in a string using the following header:
// public static int count(String str, char a)For example, count("Welcome", 'e') returns 2. Write a test program that 
// prompts the user to enter a string followed by a character and displays the number 
// of occurrences of the character in the string.



let str = prompt("Enter the text ")
let ch = prompt("Enter the letter ")
function count(str, ch) {
    let count = 0;
    for(let i = 0 ; i < str.length ; i++){
        let letter = str[i]
        if(letter === ch ){
            count++
        }
    }
    return count;
}



console.log( ch + "  repeated  "+ count(str , ch ) + " times" )