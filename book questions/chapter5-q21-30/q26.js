// (Compute e) You can approximate e using the following series:
// e = 1 + 1
// 1! + 1
// 2! + 1
// 3! + 1
// 4! + g + 1
// i!
// Write a program that displays the e value for i = 10000, 20000, …, and 
// 100000. (Hint: Because i! = i * (i- 1) * c * 2 * 1, then
// 1
// i! is
// 1
// i(i- 1)!
// Initialize e and item to be 1 and keep adding a new item to e. The new item is 
// the previous item divided by i for i = 2, 3, 4, ....)

// 

for (let limit = 10000; limit <= 100000; limit += 10000) {
    
    let e = 1;     
    let item = 1; 

    for (let i = 1; i <= limit; i++) {
        item /= i; 
        e += item;
    }

    console.log("i = " + limit + "  →  e ≈ " + e);
}