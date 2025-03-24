const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
  ];
  
  // Convert the products array to an object where the key is the id and the value is an object with name
  let productObject = products.reduce((obj, product) => {
    obj[product.id] = { name: product.name };
    return obj;
  }, {});
  
  console.log(productObject);
  