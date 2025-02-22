let userInput = "";
let obj = {}; // Initialize the object

// Continuously ask for property and value until the user types "stop"
while (userInput.toLowerCase() !== "stop") {
  
    
  // Get property from the user
  let property = prompt("Enter fruit name (or type 'stop' to finish):");
  if (property.toLowerCase() === "stop") {
    break;
  }
  let value = prompt("Enter number of fruit:");
 
   if (value > 1) {
        property += "s";
      }
  
  
  // Assign the property and value to the object
  obj[property] = value;
  
}

// Output the final object
console.log(obj);
