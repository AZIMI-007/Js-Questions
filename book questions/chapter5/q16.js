// (Find the actors of an integer) Write a program that reads an integer and displays 
// all its smallest factors in increasing order. For example, if the input integer is 
// 120, the output should be as follows: 2,2,2,3,5.



let userNumber = Number(prompt("enter a number "))

var i = 2;

while (userNumber > 1) {
    if (userNumber % i === 0) {
        console.log(i);
        userNumber = userNumber / i;     
    } else {
        i++;              
    }
} 