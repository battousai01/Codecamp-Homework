function containsInappropriateWords(str) {
    // Define the regular expression with the words to search for (case-insensitive)
    const regex = /\b(xxx|sex|porn)\b/i;
  
    // Test if any of the words are present in the string
    return regex.test(str);
  }
  
  console.log(containsInappropriateWords("This is a porn video"));  // Output: true
  console.log(containsInappropriateWords("This is just a movie"));  // Output: false
  console.log(containsInappropriateWords("I am watching SEX"));    // Output: true
  console.log(containsInappropriateWords("Nothing here"));         // Output: false
  