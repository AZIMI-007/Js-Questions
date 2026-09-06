//  5.11 (Find numbers divisible by 5 or 6, but not both) Write a program that displays 
// all the numbers from 100 to 200, ten per line, that are divisible by 5 or 6, but not 
// both. Numbers are separated by exactly one space.

let count = 0
for (let n = 100; n < 200; n++){
   if ((n % 5 === 0 || n % 6 === 0) && !(n % 5 === 0 && n % 6 === 0))
          count++
        console.log(count+ ":  " + n)
 
}