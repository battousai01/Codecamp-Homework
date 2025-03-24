function getEvenNumbers(...numbers) {
    return numbers.filter(num => num % 2 === 0);
  }
  
  console.log(getEvenNumbers(1, 2, 3, 4, 5, 6));   // Output: [2, 4, 6]
  console.log(getEvenNumbers(10, 15, 20, 25));     // Output: [10, 20]
  console.log(getEvenNumbers(7, 11, 13));          // Output: []
  console.log(getEvenNumbers(2, 4, 6, 8));         // Output: [2, 4, 6, 8]
  