const state1 = { username: 'john', point: 100, loading: true };

// Cloning and modifying the object
const state2 = {
  ...state1,        // Spread the existing properties
  loading: false,   // Update the 'loading' property
  point: 75,        // Update the 'point' property
  access: true      // Add the 'access' property
};

console.log(state2);
