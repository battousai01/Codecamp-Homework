let str = 'I live in Thailand';

// Convert the string to lowercase to count capital and small letters together
str = str.toLowerCase();

// Create an object to store the count of each character
let charCount = {};

// Loop through the string and count each character, ignoring spaces
for (let char of str) {
  if (char !== ' ') {  // Skip spaces
    charCount[char] = (charCount[char] || 0) + 1;
  }
}

console.log(charCount);
