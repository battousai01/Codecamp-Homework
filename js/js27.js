let username = prompt("Enter username:");
let password = prompt("Enter password:");

// Check conditions
if (!username.trim() && !password.trim()) {
    console.log("User and pass is empty");
} else if (!username.trim()) {
    console.log("username is required");
} else if (!password.trim()) {
    console.log("password is required");
} 
else if(username === "admin" && password === "1234") {
    console.log("Hello");
}
else if (username === "john" && password === "qwerty") {
    console.log("Hello");
}
else {
    console.log("wrong password");
}
