let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

// Create an object to store the count of each name
let nameCount = {};

// Loop through the array and count each name
names.forEach(name => {
  // If the name already exists in the object, increment its count
  if (nameCount[name]) {
    nameCount[name]++;
  } else {
    // Otherwise, initialize its count to 1
    nameCount[name] = 1;
  }
});

console.log(nameCount);
