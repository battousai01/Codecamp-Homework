function calculateRectangleDiagonal(length, width) {
    // Calculate the diagonal using the Pythagorean theorem: sqrt(length^2 + width^2)
    return Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));
  }
  
  // Example usage:
  let length = 5;
  let width = 12;
  let diagonal = calculateRectangleDiagonal(length, width);
  console.log(diagonal);  // Output: 13 (for a rectangle with length 5 and width 12)
  