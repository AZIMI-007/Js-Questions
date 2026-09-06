// (Display patterns) Write a method to display a pattern as follows:
//               1
//             2 1
//           3 2 1
// ...
// n n-1 ... 3 2 1
// The method header is
// public static void displayPattern(int n)
 

function displayPattern(n) {

    for (let i = 1; i <= n; i++) {

        let output = "";

        
        for (let s = 1; s <= n - i; s++) {
            output += "  ";
        }

    
        for (let j = i; j >= 1; j--) {
            output += j + " ";
        }

        console.log(output);
    }
}

displayPattern(5);