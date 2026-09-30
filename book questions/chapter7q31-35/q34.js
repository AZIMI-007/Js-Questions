// (Sort characters in a string) Write a method that returns a sorted string using the 
// following header:
// public static String sort(String s)
// For example, sort("acb") returns abc.
// Write a test program that prompts the user to enter a string and displays the sorted 
// string.

function sort(s) {
    let characters = s.split("")

    characters.sort()

    return characters.join("")
}

let text = prompt("Enter a string:")

let result = sort(text)

console.log("Sorted string:", result) 

   