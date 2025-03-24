let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

// Convert the array to a Set to remove duplicates and then back to an array
let uniqueChars = [...new Set(alphabets)];

console.log(uniqueChars);  // Output: ['a', 'b', 'c', 'e', 'd']
