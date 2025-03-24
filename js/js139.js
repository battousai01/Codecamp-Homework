let arr = ['31', '45', '12', '67', '34', '86', '23', '37', '19', '41'];

// Convert the array elements to numbers
let numArr = arr.map(Number);

// Filter values less than 40
let filteredArr = numArr.filter(num => num < 40);

// Sum the filtered values
let sum = filteredArr.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);  // Output: 156
