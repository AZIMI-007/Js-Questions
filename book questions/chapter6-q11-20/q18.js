// (Check password) Some websites impose certain rules for passwords. Write a 
// method that checks whether a string is a valid password. Suppose the password 
// rules are as follows:
//  ■ A password must have at least eight characters.
//  ■ A password consists of only letters and digits.
//  ■ A password must contain at least two digits.
// Write a program that prompts the user to enter a password and displays Valid
// Password if the rules are followed or Invalid Password otherwise.


let password = prompt("Enter your password");

function CheckPassword(password) {

    let digitCount = 0;
    if (password.length < 8) {
        console.log("Invalid Password");
        return;
    }

    
    for (let i = 0; i < password.length; i++) {

        let ch = password[i];

        if ((ch >= "a" && ch <= "z") ||
            (ch >= "A" && ch <= "Z")) {

        } else if (ch >= "0" && ch <= "9") {

            digitCount++;

        } else {

            console.log("Invalid Password");
            return;
        }
    }

    
    if (digitCount < 2) {
        console.log("Invalid Password");
    } else {
        console.log("Valid Password");
    }
}

CheckPassword(password);