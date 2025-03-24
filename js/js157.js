let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers); // *[ 10, 30, 20 ]

/*[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
above line is using array destructuring to swap the elements at index and index 2 in the numbers array.*/