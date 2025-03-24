function Accumulator(startingValue) {
    // Initialize the currentValue property
    this.currentValue = startingValue;
  
    // Method to receive two inputs and add them to currentValue
    this.read = function() {
      let num1 = +prompt("Enter the first number:", 0);
      let num2 = +prompt("Enter the second number:", 0);
      this.currentValue += num1 + num2;
    };
  
    // Method to display the current value using an alert
    this.show = function() {
      alert("Current Value: " + this.currentValue);
    };
  }
  
  // Usage example:
  
  // Create an Accumulator instance with a starting value of 10
  let accumulator = new Accumulator(10);
  
  // Display the current value (initially 10)
  accumulator.show();
  
  // Call read() to add two numbers to currentValue
  accumulator.read();
  
  // Show the updated current value after adding the inputs
  accumulator.show();
  