//   (Math: pentagonal numbers) A pentagonal number is defined as n(3n–1)/2 for 
// n = 1,2,  . . ., and so on. Therefore, the first few numbers are 1, 5, 12, 22, . . . . 
// Write a method with the following header that returns a pentagonal number:
// public static int getPentagonalNumber(int n)
// Write a test program that uses this method to display the first 100 pentagonal 
// numbers with 10 numbers on each line. 
   

function pentagonal(n){
return n * (3 * n - 1) / 2

}

let result = ""

for(let i = 1 ; i <= 100 ; i++){
    result += pentagonal(i) + " ";
if( i % 10 === 0){
    result += "\n"
}
}
console.log(result)