let input = prompt("Enter a number:");
input = Number(input); // Convert input to a number

if (isNaN(input)) {
    console.log("Invalid input! Please enter a valid number.");
} else if (input % 2 === 0) {
    console.log(input + " is an Even number.");
} else {
    console.log(input + " is an Odd number.");
}
