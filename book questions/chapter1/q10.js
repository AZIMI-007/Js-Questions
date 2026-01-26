// (Average speed in miles) Assume a runner runs 14 kilometers in 45 minutes and 30
// seconds. Write a program that displays the average speed in miles per hour. (Note 
// that 1 mile is 1.6 kilometers.)
  
let km=14
let min=45
let sec=30
let mile=km/1.6
let hour1=min/60
let hour2=sec/3600
let hour = hour1 + hour2
let averagespeed = mile/hour
console.log(averagespeed)
