function toCamelCase(str) {
    return str
      .split('-')               // search hyphen and split the string between hypen into an array of words
                                // e.g. "background-color" => ["background", "color"]

       //loop through the array ["background", "color"] of words by map() method and use function to capitalize 
       // the first letter of every word except the first one 
      .map((word, index) => {
        // test the word is the first word or not(index === 0). If it is the first word, return the word as it is
        // index === 0 ? word
        // If it is not the first word, capitalize the first letter of the word 
        // word.charAt(0).toUpperCase() 
        // This retrieves the rest of the string starting from the second character (olor)
        // word.slice(1)
        // Join the first letter and the rest of the string together ["background", "Color"]
        // word.charAt(0).toUpperCase() + word.slice(1)
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
      })

        // Join the words back together without spaces
        // ["background", "Color"] => "backgroundColor"
      .join('');                 
  }
  
  let str = "background-color";
  let camelCaseStr = toCamelCase(str);
  
  console.log(camelCaseStr);
  