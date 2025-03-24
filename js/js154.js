const originalObject = { a: 1, b: 2, c: { d: 3 } };
const clonedObject = Object.assign({}, originalObject);


console.log(clonedObject); // { a: 1, b: 2, c: { d: 3 } }

