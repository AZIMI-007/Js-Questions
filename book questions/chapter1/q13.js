// (Algebra: solve 2 * 2 linear equations) You can use Cramer’s rule to solve the fol
// lowing 2 * 2 system of linear equation:
// ax + by = e
// cx + dy = f x = ed- bf
// ad- bc y = af- ec
// ad- bc
// Write a program that solves the following equation and displays the value for x and y:
// 3.4x + 50.2y = 44.5
// 2.1x + .55y = 5.9

let a = 3.4
let b = 50.2
let c = 2.1
let d = 0.55
let e = 44.5
let f = 5.9
let x = (e * d - b * f) / (a * d - b * c)
let y = (a * f - e * c) / (a * d - b * c)
console.log(x)
console.log(y)