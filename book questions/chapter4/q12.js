// (Hex to binary) Write a program that prompts the user to enter a hex digit and 
// displays its corresponding binary 
let hex = prompt("Enter a hex digit (0-9 or A-F):") 


switch (hex) {
    case "0": console.log("0000") 
     break 
    
    case "1": console.log("0001") 
     break 
    
    case "2": console.log("0010") 
     break 
    
    case "3": console.log("0011") 
     break 
    
    case "4": console.log("0100") 
     break 
    
    case "5": console.log("0101") 
     break 
    
    case "6": console.log("0110") 
     break 
    
    case "7": console.log("0111") 
     break 
    
    case "8": console.log("1000") 
     break 
    
    case "9": console.log("1001") 
     break 
    
    case "A":
    case "a": console.log("1010") 
     break 
    
    case "B":
    case "b": console.log("1011") 
     break 
    
    case "C":
    case "c": console.log("1100") 
     break 
    
    case "D":
    case "d": console.log("1101") 
     break 
    
    case "E":
    case "e": console.log("1110") 
     break 
    
    case "F":
    case "f": console.log("1111") 
     break 
    
    default:
        console.log("Invalid hex digit") 
        
}
