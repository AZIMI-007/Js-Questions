// 15. Ask for a username and password. If they match predefined ones (e.g., "admin", "1234"), print “Login successful.” Otherwise, print “Login failed.”
 let username=prompt("Enter your user name")
 let password=prompt("Enter your user password")

 if(username==="admin" && password==="1234"){
    console.log("Login successful")
 }else{
    console.log("Login failed")
 }