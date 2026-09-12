// (Bubble sort) Write a sort method that uses the bubble-sort algorithm. The bubble
// sort algorithm makes several passes through the array. On each pass, successive 
// neighboring pairs are compared. If a pair is not in order, its values are swapped; 
// otherwise, the values remain unchanged. The technique is called a bubble sort or 
// sinking sort because the smaller values gradually “bubble” their way to the top 
// and the larger values “sink” to the bottom. Write a test program that reads in ten 
// double numbers, invokes the method, and displays the sorted numbers.

let numbers = []

for (let i = 0; i < 10; i++) {
    let number = Number(prompt("Enter a number: "))
    numbers.push(number)
}

function sort(numbers) {

    for (let i = 0; i < numbers.length - 1; i++) {

        for (let j = 0; j < numbers.length - 1 - i; j++) {

            if (numbers[j] > numbers[j + 1]) {

                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }

    return numbers;
}


let result = sort(numbers);

console.log(result);