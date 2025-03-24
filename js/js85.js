
function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    }
    return str;
  }
  
  console.log(truncateString("Hello, this is a long string!", 10));  // Output: "Hello, thi..."
  console.log(truncateString("Short string", 100));                   // Output: "Short string"
  