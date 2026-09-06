// (Find the largestn such that n3612,000) Use a while loop to find the largest 
// integer n such that n3 is less than 12,000.



let n = 0;

while (n * n * n < 12000) {
    n++;
}

n--;
console.log("largest n is: " + n); 