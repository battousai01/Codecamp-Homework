let user = prompt("Enter username!");
let password = "123456";

if(!user){
  user="guest";
}
else if(user === "codecamp"){
    let password = prompt("Enter your password:");
    if(password != 123456){
    alert("Wrong password");
    }
}
else {
    user = "guest";
}

alert("Welcome",user);
