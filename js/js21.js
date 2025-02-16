let name="Kitti"
let userInput = prompt("Guess my name:");
if (userInput === name) { // Strict comparison
    console.log("Access granted!");
} else {
    console.log("Access denied!");
}