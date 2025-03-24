const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];
  
  
  const index = tasks.findIndex((person) => person.id === 2);
  
  console.log(index)
  