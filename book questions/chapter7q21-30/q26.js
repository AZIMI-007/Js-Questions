// (Strictly identical arrays) The arrays list1 and list2 are strictly identical
// if their corresponding elements are equal. Write a method that returns true if 
// list1 and list2 are strictly identical, using the following header:
// public static boolean equals(int[] list1, int[] list2)
// Write a test program that prompts the user to enter two lists of integers and dis
// plays whether the two are strictly identical. Here are the sample runs. Note that 
// the first number in the input indicates the number of the elements in the list. This 
// number is not part of the list.

function equals(list1, list2) {


    if (list1.length !== list2.length) {
        return false
    }

    
    for (let i = 0; i < list1.length; i++) {

        if (list1[i] !== list2[i]) {
            return false
        }
    }

    
    return true
}

let n1 = Number(prompt("Enter the number of elements in list1:"))


let list1 = []

for (let i = 0; i < n1; i++) {
    let number = Number(prompt("Enter element " + (i + 1) + ":"))
    list1.push(number)
}



let n2 = Number(prompt("Enter the number of elements in list2:"))


let list2 = []

for (let i = 0; i < n2; i++) {
    let number = Number(prompt("Enter element " + (i + 1) + ":"))
    list2.push(number)
}



let result = equals(list1, list2)



if (result) {
    console.log("The two lists are strictly identical.")
}
else {
    console.log("The two lists are not strictly identical.")
}       