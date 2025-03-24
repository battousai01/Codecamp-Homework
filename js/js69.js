class Calculator {
    constructor(startValue = 0) {
      // Initialize the value, defaulting to 0 if no start value is provided
      this.value = startValue;
    }
  
    // Method to receive a start value (or default)
    value() {
      return this.value;
    }
  
    // Method to add a user-provided value to the current value
    add(addValue) {
      this.value += addValue;
    }
  
    // Method to subtract a user-provided value from the current value
    subtract(subValue) {
      this.value -= subValue;
    }
  
    // Method to multiply the current value by a user-provided value
    multiply(multValue) {
      this.value *= multValue;
    }
  
    // Method to divide the current value by a user-provided value
    divide(divValue) {
      if (divValue !== 0) {
        this.value /= divValue;
      } else {
        console.error('Cannot divide by zero');
      }
    }
  
    // Method to display the current value (alerting the value)
    show() {
      alert(this.value);
    }
  }
  
  // Example usage:
  const calc = new Calculator(10); // Initializes the value with 10
  
  calc.add(5);        // Adds 5 to the value (10 + 5 = 15)
  calc.subtract(3);   // Subtracts 3 from the value (15 - 3 = 12)
  calc.multiply(2);   // Multiplies the value by 2 (12 * 2 = 24)
  calc.divide(4);     // Divides the value by 4 (24 / 4 = 6)
  calc.show();        // Shows the value (6)
  