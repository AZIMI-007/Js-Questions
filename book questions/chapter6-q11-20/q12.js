// (Display characters) Write a method that prints characters using the following 
// header:
// public static void printChars(char ch1, char ch2, int
//  numberPerLine)
// This method prints the characters between ch1 and ch2 with the specified num
// bers per line. Write a test program that prints ten characters per line from 1 to Z.
// Characters are separated by exactly one space.

function printChars(ch1 , ch2 , numberPerLine){
    let start = ch1.charCodeAt(0)
    let end = ch2.charCodeAt(0)
    let line = ""
    let count = 0
    for(let i = start ; i <= end ; i++){
    
    line += String.fromCharCode(i) + " "
    count++

   if(count === numberPerLine){
    console.log(line)
    line = ""
    count = 0
   }
    }
    if (line != ""){
        console.log(line)
    }
}

printChars("A", "Z" , 10)

