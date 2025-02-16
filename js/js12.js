let a = undefined;
let b = '';
let c = !b;

// Convert to strings
let d = Boolean(a);  // "false" 
let e = Boolean(b);  // "false"
let f = Boolean(c);  // "true" 


// Output results
console.log(d, typeof d); // "false" because undefined is falsy in boolean context
console.log(e, typeof e); // "false" because an empty string is falsy in boolean context 
console.log(f, typeof f); // "true" because the value of b falsy so !b is convert false to true
