// 5. Ask the user for a score (0–100). Print:
// "A" if 90–100
// "B" if 80–89
// "C" if 70–79
// "D" if 60–69
// "F" otherwise

let score = Number(prompt("Enter your score (0–100)"))

if (score >= 90 && score <= 100){
  console.log("A")
} else if (score >= 80 && score <= 89){
  console.log("B")
} else if (score >= 70 && score <= 79){
  console.log("C")
} else if (score >= 60 && score <= 69){
  console.log("D")
} else {
  console.log("F")
}