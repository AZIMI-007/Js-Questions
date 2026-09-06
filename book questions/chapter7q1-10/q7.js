// (Count single digits) Write a program that generates 100 random integers between 
// 0 and 9 and displays the count for each number. (Hint: Use an array of ten integers, 
// say counts, to store the counts for the number of 0s, 1s, ..., 9s.) 

let counts = new Array(10).fill(0) 

for (let i = 0; i < 100; i++) {
    let number = Math.floor(Math.random() * 10);
    counts[number]++;
}

for (let i = 0; i < counts.length; i++) {
    console.log(i + " occurs " + counts[i] + " times")
    
}