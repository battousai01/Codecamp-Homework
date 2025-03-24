let arr = [1, [2, [[[3, 4], 5], 6]]];

const [a,[b,[[[c,d],e],f]]] = arr
 
// Store all the values in an array
let values = [a, b, c, d, e, f];

let result = "";
for (let i = 0; i < values.length; i++) {
  // Use a simple conditional to create the correct label for each value
  let label = String.fromCharCode(97 + i);  // ASCII value for 'a' is 97, so this will give 'a', 'b', 'c', etc.
  result += `${label}=${values[i]}`;


  // Add a comma if it's not the last value
  if (i < values.length - 1) {
    result += ', ';
  }
}

console.log(result);