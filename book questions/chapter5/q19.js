// (Display numbers in a pyramid pattern) Write a nested for loop that prints the 
// following output:
//                             1
//                         1   2   1
//                     1   2   4   2   1
//                 1   2   4   8   4   2   1
//             1   2   4   8  16   8   4   2   1
//         1   2   4   8  16  32  16   8   4   2   1
//     1   2   4   8  16  32  64  32  16   8   4   2   1
// 1   2   4   8  16  32  64 128  64  32  16   8   4   2   1




let n = 8;

for (let i = 1; i <= n; i++) {
    let line = "";

    
    for (let s = 0; s < n - i; s++) {
        line += "    ";
    }

    let num = 1;

    
    for (let j = 1; j <= i; j++) {

        let number = num;
        let change = "";

        while (number < 100) {
            if (number < 10) {
                change = "  " + number;
            } else if (number < 100) {
                change = " " + number;
            }
            break;
        }

        if (number >= 100) {
            change = number;
        }

        line += change + " ";
        num *= 2;
    }

    
    num /= 2;

    for (let j = 1; j < i; j++) {

        num /= 2;
        let number = num;
        let change = "";

        while (number < 100) {
            if (number < 10) {
                change = "  " + number;
            } else if (number < 100) {
                change = " " + number;
            }
            break;
        }

        if (number >= 100) {
            change = number;
        }

        line += change + " ";
    }

    console.log(line);
}




