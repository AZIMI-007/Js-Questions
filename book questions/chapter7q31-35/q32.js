// (Partition of a list) Write the following method that partitions the list using the 
// first element, called a pivot.
// public static int partition(int[] list)
// After the partition, the elements in the list are rearranged so that all the elements 
// before the pivot are less than or equal to the pivot and the elements after the pivot 
// are greater than the pivot. The method returns the index where the pivot is located 
// in the new list. For example, suppose the list is {5,2,9,3,6,8}. After the parti
// tion, the list becomes {3, 2, 5, 9, 6, 8}. Implement the method in a way that takes 
// at most list.length comparisons. Write a test program that prompts the user 
// to enter a list and displays the list after the partition. Here is a sample run. Note 
// that the first number in the input indicates the number of the elements in the list. 
// This number is not part of the list.


function partition(list) {

    let pivot = list[0]

    let low = 1
    let high = list.length - 1

    while (low <= high) {

    
        while (low <= high && list[low] <= pivot) {
            low++
        }

    
        while (low <= high && list[high] > pivot) {
            high--
        }

        
        if (low <= high) {
            let temp = list[low]
            list[low] = list[high]
            list[high] = temp

            low++
            high--
        }
    }

    
    let temp = list[0]
    list[0] = list[high]
    list[high] = temp

    return high
}



let size = Number(prompt("Enter the number of elements:"))

let list = []

for (let i = 0; i < size; i++) {
    let number = Number(prompt("Enter a number:"))
    list.push(number)
}


let pivotIndex = partition(list)

console.log("After partition:", list)
console.log("Pivot index:", pivotIndex)