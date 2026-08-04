// (Sum series) Write a method to compute the following series:
// m(i) = 1
// 2 + 2
// 3 + c + i
// i + 1
// Write a test program that displays the following table:
// i
// 1
// 2
// ...
// 19
// 20
// m(i)
//  0.5000
//  1.1667
// 16.4023
// 17.3546


function SumSeries(n){
let sum = 0
for(let i = 1 ; i <= n ; i++ ){
  sum += i / (i + 1)
  
}
return sum
}
console.log("i         " + "m(i)" )
for(let i = 1 ; i <= 20 ; i++){
let result = SumSeries(i)
console.log(i + "         " + result.toFixed(4))
}

