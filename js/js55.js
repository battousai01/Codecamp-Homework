let userInput = "";
let obj = {}; // Initialize the object

// Continuously ask for property and value until the user types "stop"
while (userInput.toLowerCase() !== "stop") {
  // Get property from the user
  let property = prompt("Enter property name (or type 'stop' to finish):");
  
  // If the user types "stop", break the loop
  if (property.toLowerCase() === "stop") {
    break;
  }
  
  // Get value for the property from the user
  let value = prompt(`Enter value for ${property}:`);
  
  // Assign the property and value to the object
  obj[property] = value;
}

// Output the final object
console.log(obj);
