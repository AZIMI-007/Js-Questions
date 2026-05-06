// (Reverse a string) Write a program that prompts the user to enter a string and 
// displays the string in reverse order.



let text = prompt("یک متن وارد کن:");
let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
}

console.log("reversed == " + reversed );