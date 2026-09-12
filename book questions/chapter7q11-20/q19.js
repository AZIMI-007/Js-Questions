// (Sorted?) Write the following method that returns true if the list is already sorted 
// in increasing order.
// public static boolean isSorted(int[] list)
// Write a test program that prompts the user to enter a list and displays whether 
// the list is sorted or not. Here is a sample run. Note that the first number in the 
// input indicates the number of the elements in the list. This number is not part 
// of the list.  

let numberoflist = Number(prompt("Enter the number of elements in the list"));
let items = [];

for (let i = 0; i < numberoflist; i++) {
    items.push(Number(prompt("Enter the number")));
}

console.log("List:", items)
function isSorted(list) {

    for (let i = 0; i < list.length - 1; i++) {

        if (list[i] > list[i + 1]) {
            return false;
        }
    }

    return true;
}

let result = isSorted(items);

if (result) {
    console.log("The list is sorted.")
} else {
    console.log("The list is not sorted.")
}

