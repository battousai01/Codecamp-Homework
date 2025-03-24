/*let a, b;
{ a, b } = {a: 1, b: 2};


console.log(a,b)/*error*/
/*Because the curly braces {} are used for block statements and object literals. When you write { a, b } = { a: 1, b: 2 } without parentheses, it is interpreted as an empty block (because there's no code inside). Therefore, you need to use parentheses ({ a, b } = { a: 1, b: 2 }) to explicitly tell JavaScript that you are performing a destructuring assignment.*/



/*Correct*/
let a, b;
({ a, b } = { a: 1, b: 2 });  // Use parentheses around the destructuring assignment
console.log(a,b)/*1,2*/