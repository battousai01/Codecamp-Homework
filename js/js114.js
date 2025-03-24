const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];
  
  // Function to update the task name by id
  function deleteTask(id) {
    // Find the task with the matching id and update its name
    const Index = tasks.findIndex(task => task.id === id);
    delete tasks[Index];
  }
  
  // Test the function
  deleteTask(2);  // Updates the task with id 2 to "Grocery Shopping"
  console.log(tasks);
  