// (Execution time) Write a program that randomly generates an array of 100,000 
// integers and a key. Estimate the execution time of invoking the linearSearch
// method in Listing 7.6. Sort the array and estimate the execution time of invok
// ing the binarySearch method in Listing 7.7. You can use the following code 
// template to obtain the execution time:
// long startTime = System.currentTimeMillis();
// perform the task;
// long endTime = System.currentTimeMillis();
// long executionTime = endTime - startTime;


      

function linearSearch(list, key) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === key) {
            return i;
        }
    }

    return -1;
}


function binarySearch(list, key) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);

        if (key === list[mid]) {
            return mid;
        } 
        else if (key < list[mid]) {
            high = mid - 1;
        } 
        else {
            low = mid + 1;
        }
    }

    return -1;
}



let numbers = [];

for (let i = 0; i < 100000; i++) {
    let randomNumber = Math.floor(Math.random() * 100000);
    numbers.push(randomNumber);
}


let key = Math.floor(Math.random() * 100000);

let startTime = Date.now();

linearSearch(numbers, key);

let endTime = Date.now();

let linearTime = endTime - startTime;


numbers.sort((a, b) => a - b);



startTime = Date.now();

binarySearch(numbers, key);

endTime = Date.now();

let binaryTime = endTime - startTime;


console.log("Key:", key);
console.log("Linear Search time:", linearTime, "ms");
console.log("Binary Search time:", binaryTime, "ms");

