// Conversion from miles to kilometers) Write a program that displays the follow
// ing table (note that 1 mile is 1.609 kilometers):

let kilometerspermile = 1.609
let result = "mile\tkilometes\n"
for (km=1 ; km<11 ; km++){
    let kilometers = km * kilometerspermile
    result += km + "\t" +kilometers + "\n"
}
console.log(result)