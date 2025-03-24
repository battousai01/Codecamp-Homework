function modifyArray(arr) {
    // Check if the array has at least 3 elements
    if (arr.length < 3) {
      return "Array must have at least 3 elements.";
    }
  
    // Use spread operator to copy the array and modify the third element
    const newArray = [...arr];
    newArray[2] = newArray[2] ** 2;  // Square the third element (index 2)
  
    return newArray;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5];
  const modifiedArray = modifyArray(originalArray);
  
  console.log(modifiedArray);  // Output: [1, 2, 9, 4, 5]
  