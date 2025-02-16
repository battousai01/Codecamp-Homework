let a = undefined;
let b = null;
let c = b+'4 2';

// Convert to strings
let d = Number(a);  // "NaN" 
let e = Number(b);  // "0"
let f = Number(c);  // "NaN" 


// Output results
console.log(d, typeof d); // "NaN" because undefined is not a number (NaN = not a number)
console.log(e, typeof e); // "0" null will explicity convert to 0  
console.log(f, typeof f); // "NaN" because the value of c is null4 2 which is not a number so f will be NaN
