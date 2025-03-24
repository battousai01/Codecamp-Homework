function multiply(...numbers) {
    return numbers.reduce((product, num) => product * num, 1);
  }
  
  console.log(multiply(2, 3, 4));         // Output: 24 (2 * 3 * 4)
  console.log(multiply(1, 5, 6, 7));      // Output: 210 (1 * 5 * 6 * 7)
  console.log(multiply(10, 20));          // Output: 200 (10 * 20)
  console.log(multiply(5));               // Output: 5 (just the single number)
  