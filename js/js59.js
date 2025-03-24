const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;


console.log(product1); // *{ name: 'Pepsi', price: 19, size: '500mL' }
console.log(product2); // **{ name: 'Pepsi', price: 19, size: '500mL' }
console.log(product1 === product2); // *** True
// Explanation: Both product1 and product2 are pointing to the same memory location. 
// So, when we change the value of product2, it will also reflect in product1. That's why both product1 and product2 are the same.