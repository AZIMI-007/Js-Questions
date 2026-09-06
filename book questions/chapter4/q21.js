
let user = prompt("Enter number ddd-dd-dddd");

if (
user.length === 11 &&
user.charAt(3) === '-' &&
user.charAt(6) === '-' &&

!isNaN(user.charAt(0)) &&
!isNaN(user.charAt(1)) &&
!isNaN(user.charAt(2)) &&

!isNaN(user.charAt(4)) &&
!isNaN(user.charAt(5)) &&

!isNaN(user.charAt(7)) &&
!isNaN(user.charAt(8)) &&
!isNaN(user.charAt(9)) &&
!isNaN(user.charAt(10))

){
    alert("true")
}else{
    alert("fales")
}
