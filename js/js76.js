function random(min, max) {
    // Generate a random number between min (inclusive) and max (exclusive)
    return Math.random() * (max - min) + min;
  }
  
  // Example usage:
  let min = 2;
  let max = 5;
  let result = random(min, max);
  console.log(result);  // This will log a random number between 1 (inclusive) and 5 (exclusive)
  