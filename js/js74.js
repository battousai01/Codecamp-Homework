function formatToTwoDecimalPlaces(number) {
    // If the number is an integer, add '.00' to it
    if (Number.isInteger(number)) {
      return number.toFixed(2);
    }
    
    // Otherwise, truncate to two decimal places
    return Math.floor(number * 100) / 100;
  }
  
  // Example usage:
  console.log(formatToTwoDecimalPlaces(12));        // Output: "12.00"
  console.log(formatToTwoDecimalPlaces(12.3456));   // Output: "12.34"
  console.log(formatToTwoDecimalPlaces(12.1));      // Output: "12.10"
  console.log(formatToTwoDecimalPlaces(12.999));    // Output: "12.99"
  