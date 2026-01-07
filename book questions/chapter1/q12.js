// (Average speed in kilometers) Assume a runner runs 24 miles in 1 hour, 40  minutes,
// and 35 seconds. Write a program that displays the average speed in kilometers per 
// hour. (Note that 1 mile is 1.6 kilometers.)

let mile = 24
let hour = 1
let min = 40
let sec = 35
let km = mile * 1.6
let h1 = min / 60
let h2 = sec / 3600
let totalHour = hour+h1+h2
let averagespeed = km / totalHour
console.log(averagespeed)