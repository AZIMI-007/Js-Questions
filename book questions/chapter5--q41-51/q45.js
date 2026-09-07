// (Statistics: compute mean and standard deviation) In business applications, you 
// are often asked to compute the mean and standard deviation of data. The mean is 
// simply the average of the numbers. The standard deviation is a statistic that tells you how tightly all the various data are clustered around the mean in a set of data. 
// For example, what is the average age of the students in a class? How close are the 
// ages? If all the students are the same age, the deviation is 0.
// Write a program that prompts the user to enter ten numbers, and displays the 
// mean and standard deviations of these numbers using the following formula:

let sum = 0;

for (let i = 0; i < 10; i++) {
    let num = Number(prompt("یک عدد وارد کن: "));
    sum += num;

    // ذخیره موقت برای مرحله بعد
    if (i === 0) var n1 = num;
    if (i === 1) var n2 = num;
    if (i === 2) var n3 = num;
    if (i === 3) var n4 = num;
    if (i === 4) var n5 = num;
    if (i === 5) var n6 = num;
    if (i === 6) var n7 = num;
    if (i === 7) var n8 = num;
    if (i === 8) var n9 = num;
    if (i === 9) var n10 = num;
}
let mean = sum / 10;


let sum2 = 0;

sum2 += (n1 - mean) * (n1 - mean);
sum2 += (n2 - mean) * (n2 - mean);
sum2 += (n3 - mean) * (n3 - mean);
sum2 += (n4 - mean) * (n4 - mean);
sum2 += (n5 - mean) * (n5 - mean);
sum2 += (n6 - mean) * (n6 - mean);
sum2 += (n7 - mean) * (n7 - mean);
sum2 += (n8 - mean) * (n8 - mean);
sum2 += (n9 - mean) * (n9 - mean);
sum2 += (n10 - mean) * (n10 - mean);


let standardDeviation = Math.sqrt(sum2 / 10);

console.log("میانگین = " + mean);
console.log("انحراف معیار = " + standardDeviation);

   