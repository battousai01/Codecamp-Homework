function rollDice() {
    // Generate a random integer between 1 and 6 (inclusive)
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Example usage:
  let result = rollDice();
  console.log(result);  // This will log a random integer between 1 and 6, simulating a dice roll
  