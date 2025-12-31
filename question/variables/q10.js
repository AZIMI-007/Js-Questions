// 10. The population of a town is p = 312032486. Each year:
// one birth every 7 seconds
// one death every 13 seconds
// one new immigrant every 45 seconds
// Write a program to calculate the population after 1 year. (Hint: 1 year = 365 × 24 × 60 × 60 seconds).

let p=312032486
let birth=7 * (365 * 24 * 60 * 60)
let death=13 * (365 * 24 * 60 * 60)
let immigrant=45 * (365 * 24 * 60 * 60)
let population= p+birth+immigrant-death
console.log(population)


