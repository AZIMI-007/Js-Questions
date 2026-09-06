// (Guess birthday) Rewrite Listing 4.3, GuessBirthday.java, to prompt the user to 
// enter the character Y for Yes and N for No rather than entering 1 for Yes and 0
// for No.


//4.10 (Guess birthday) Rewrite Listing 4.3, GuessBirthday.java, to prompt the user to 
// enter the character Y for Yes and N for No rather than entering 1 for Yes and 0
//  for No.


let day = 0

let set1 = "1 3 5 7\n9 11 13 15\n17 19 21 23\n25 27 29 31"
let set2 = "2 3 6 7\n10 11 14 15\n18 19 22 23\n26 27 30 31"
let set3 = "4 5 6 7\n12 13 14 15\n20 21 22 23\n28 29 30 31"
let set4 = "8 9 10 11\n12 13 14 15\n24 25 26 27\n28 29 30 31"
let set5 = "16 17 18 19\n20 21 22 23\n24 25 26 27\n28 29 30 31"

let answer = prompt("Is your birthday in Set1?\n" + set1 + "\nEnter Y for Yes and N for No:");
if (answer.toLowerCase() === "y") {
  day += 1;
} else {
  day += 0;
}

answer = prompt("Is your birthday in Set2?\n" + set2 + "\nEnter Y for Yes and N for No:");
if (answer.toLowerCase() === "y") {
  day += 2;
} else {
  day += 0;
}

answer = prompt("Is your birthday in Set3?\n" + set3 + "\nEnter Y for Yes and N for No:");
if (answer.toLowerCase() === "y") {
  day += 4;
} else {
  day += 0;
}

answer = prompt("Is your birthday in Set4?\n" + set4 + "\nEnter Y for Yes and N for No:");
if (answer.toLowerCase() === "y") {
  day += 8;
} else {
  day += 0;
}

answer = prompt("Is your birthday in Set5?\n" + set5 + "\nEnter Y for Yes and N for No:");
if (answer.toLowerCase() === "y") {
  day += 16;
} else {
  day += 0;
}

alert("Your birthday is " + day);