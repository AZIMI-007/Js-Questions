// (Estimate p) p can be computed using the following series:
// m(i) = 4¢1- 1
// 3 + 1
// 5- 1
// 7 + 1
// 9- 1
// 11 + g + (-1)i+1
// 2i- 1 ≤
// Write a method that returns m(i) for a given i and write a test program that dis
// plays the following table:
// i

function EstimatePay(p){
    let sum = 0

    for(let i = 1; i <= p; i++){
        
        if(i % 2 === 1){
            sum += 1 / (2 * i - 1)
        }else{
            sum -= 1 / (2 * i - 1)
        }
    }

    return sum * 4
}

console.log("i".padEnd(10) + "m(i)")
console.log("_______________")
for(let i = 1; i <= 901; i += 100){
    let result = EstimatePay(i)

    console.log(i.toString().padEnd(10) + result.toFixed(4))
}
