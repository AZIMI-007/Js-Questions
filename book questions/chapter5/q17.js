
// **5.17 (Display pyramid) Write a program that prompts the user to enter an integer from 
// 1 to 15 and displays a pyramid, as shown in the following sample run:

let userNumber = Number(prompt("enter a number 1 - 15 "));

for (let i = 1; i <= userNumber; i++) {
    let line = "";

    for (let a = 0; a < userNumber - i; a++) {
        line += "  "; 
    }
    
    for (let j = i; j >= 1; j--) {
        line += j + " ";
    }
      for (let j = 2; j <= i; j++) {
        line += j + " ";
    }
    console.log(line)
} 
 
  

    
