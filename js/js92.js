function getIndicesOfTargetValue(arr, targetValue) {
    let indices = [];
    
    // Loop through the array and check for the target value
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === targetValue) {
        indices.push(i);  // If the element matches the target, store the index
      }
    }
    
    return indices;
  }
  
  // Example usage:
  const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
  const targetValue = 'a';
  
  const indices = getIndicesOfTargetValue(alphabets, targetValue);
  console.log(indices);  // Output: [0, 2, 4]
  