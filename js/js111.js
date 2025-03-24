const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
  ];
  
  const valueToFind = 'cherries';
  
  const product = inventory.find(p => p.name === valueToFind);
  if (product) {
    console.log(`Found:`,product);
  } else {
    console.log('Value not found');
  }
  