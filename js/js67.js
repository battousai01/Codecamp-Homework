let calculator = {
    // Method to receive input from the user
    read() {
      this.num1 = +prompt("Enter the first number:", 0);
      this.num2 = +prompt("Enter the second number:", 0);
    },
  
    // Method to return the sum of the two numbers
    sum() {
      return this.num1 + this.num2;
    },
  
    // Method to return the product of the two numbers
    mul() {
      return this.num1 * this.num2;
    }
  };
  
  // Usage example:
  
  // 1. Call the read method to get input from the user
  calculator.read();
  
  // 2. Display the sum of the two numbers
  alert("Sum: " + calculator.sum());
  
  // 3. Display the multiplication result of the two numbers
  alert("Multiplication: " + calculator.mul());
  