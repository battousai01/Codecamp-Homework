let a = undefined;
let b = 2;
let c = a++;

// Convert to strings
let d = String(a);  // "NaN" (because undefined have Nan value in term of string)
let e = String(b);  // "2"
let f = String(c);  // "NaN" (because c = undefined++ results in NaN)

// Output results
console.log(d, typeof d); // "NaN" string
console.log(e, typeof e); // "2" string
console.log(f, typeof f); // "NaN" string
console.log(a);