function getNumberInputs() {
    let inputs = [];  // Array to store the valid number inputs
  
    while (true) {
      // Prompt user for input
      let userInput = prompt("Please enter a number (or press Cancel to stop):");
  
      // If user presses Cancel, prompt will return null
      if (userInput === null) {
        console.log("User canceled the prompt.");
        break;
      }
  
      // Convert the input to a number
      let numberInput = Number(userInput);
  
      if (userInput.trim() === "") {
          // If input is empty or contains only whitespace
          console.log("No input provided.");
          break;
      }
      // Check if the input is a valid number
      else if (!isNaN(numberInput)) {
        inputs.push(numberInput);  // Store the valid number in the array
      } else {
        console.log("Non-number input detected. Stopping.");
        break;  // Stop the loop if input is not a valid number
      }
    }
  
    // Output the collected valid numbers
    console.log("Valid numbers entered:", inputs);
  }
  
  // Call the function to start the input process
  getNumberInputs();
  