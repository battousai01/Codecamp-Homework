let inputA = Number(prompt("Enter input A:"));
let inputB = Number(prompt("Enter input B:"));
let inputC = Number(prompt("Enter input C:"));

/*Store input in array*/
let Array = [inputA,inputB,inputC];
/*Sorting number*/
Array.sort((a,b) => b - a);

console.log(Array);