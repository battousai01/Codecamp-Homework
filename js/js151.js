function processArraysAndNumbers(arrays, ...numbers) {
    // Combine all arrays into one single array
    const combinedArray = arrays.flat();
  
    // Create a result object to store comparisons
    const result = {};
  
    // For each number, check which elements in the combined array are greater
    numbers.forEach(number => {
      const greaterNumbers = combinedArray.filter(item => item > number);
      result[`greaterThan${number}`] = {
        number: number,
        numbersGreaterThan: greaterNumbers,
        count: greaterNumbers.length
      };
    });
  
    return result;
  }
  
  // Example usage:
  const result = processArraysAndNumbers([[1, 2, 3], [4, 5], [6, 7]], 3, 5);
  
  console.log(result);
  