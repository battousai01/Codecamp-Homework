function removeRandom(arr){
    // Check if the array is not empty
 if (arr.length === 0) return null;

 // Generate a random index
 const randomIndex = Math.floor(Math.random() * arr.length);

 // Remove the element at the random index
 const removedElement = arr.splice(randomIndex, 1)[0];

 // Return the removed element (optional)
 return removedElement;
}

const myArray = [1, 2, 3, 4, 5, 6];
const removed = removeRandom(myArray);

console.log(removed)
console.log(myArray)