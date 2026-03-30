//  (Find numbers divisible by 5 and 6) Write a program that displays all the num
// bers from 100 to 1,000, ten per line, that are divisible by 5 and 6.  Numbers are 
// separated by exactly one space.

let count = 0
for (let n = 100; n < 1000; n++){
    if (n % 5 === 0 && n % 6 === 0){
          count++
        console.log(count+ "=  " + n)
 }
}