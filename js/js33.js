const designTokens = {
  colors: {
    "color-primary-500": "#3498db",
    "color-secondary-500": "#2ecc71",
    "text-color": "#333333"
  },
  typography: {
    "font-base": "16px",
    "font-weight-light": "300",
    "font-weight-regular": "400",
    "font-weight-bold": "700"
  },
  spacing: {
    "spacing-small": "8px",
    "spacing-medium": "16px",
    "spacoing-large": "24px"
  },
  border: {
    "border-radius-small": "4px",
    "border-radius-medium": "8px",
    "border-radius-large": "12px"
  }
};

// Function to search for part of a key
function findKeysContainingSubstring(obj, searchKey) {
  let result = [];

  // Iterate over all keys in the object
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      // If the property is an object, recurse into it and find keys that containing the search string
      //If find the key, push it to the original result array
      result = result.concat(findKeysContainingSubstring(obj[key], searchKey));
    } else {
      // If the key contains the search string, add it to the result
      if (key.includes(searchKey)) {
        result.push(key); /*push the finding key to the result array of recurse*/
      }
    }
  } 
    return result;
   
}




