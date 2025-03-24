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
  
    // Method to return the multiplication of the two numbers
    mul() {
      return this.num1 * this.num2;
    }
  };
  
  // Use the methods
  calculator.read();
  alert(calculator.sum()); // Shows the sum of the numbers
  alert(calculator.mul()); // Shows the product of the numbers
  