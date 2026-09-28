// (Merge two sorted lists) Write the following method that merges two sorted   lists 
// into a new sorted list.
// VideoNote
// Consecutive four
// public static int[] merge(int[] list1, int[] list2)
// Implement the method in a way that takes at most list1.length + list2.
// length comparisons. Write a test program that prompts the user to enter two 
// sorted lists and displays the merged list. Here is a sample run. Note that the first 
// number in the input indicates the number of the elements in the list. This number 
// is not part of the list.



function merge(list1, list2) {
    let result = []

    let i = 0
    let j = 0

    
    while (i < list1.length && j < list2.length) {

        if (list1[i] < list2[j]) {
            result.push(list1[i])
            i++
        } else {
            result.push(list2[j])
            j++
        }
    }

    
    while (i < list1.length) {
        result.push(list1[i])
        i++
    }


    while (j < list2.length) {
        result.push(list2[j])
        j++
    }

    return result
}


let n1 = Number(prompt("Enter the number of elements in list1:"))

 let list1 = []

for (let i = 0; i < n1; i++) {
    let number = Number(prompt("Enter a number for list1:"))
    list1.push(number)
}


let n2 = Number(prompt("Enter the number of elements in list2:"))

let list2 = []

for (let i = 0; i < n2; i++) {
    let number = Number(prompt("Enter a number for list2:"))
    list2.push(number)
}

let result = merge(list1 , list2)

console.log("merge list : " , result)
