// (Find the smallestn such that n2712,000) Use a while loop to find the smallest 
// integer n such that n2 is greater than 12,000.

let n = 0;

while (n * n <= 12000) {
    n++;
}

console.log("Smallest n is: " + n);