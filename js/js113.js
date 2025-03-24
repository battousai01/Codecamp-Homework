const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];
  
  // Function to update the task name by id
  function updateTask(id, newName) {
    // Find the task with the matching id and update its name
    const task = tasks.find(task => task.id === id);
    
    if (task) {
      task.name = newName;  // Update the name if the task is found
      console.log('Task updated:', task);
    } else {
      console.log('Task not found.');
    }
  }
  
  // Test the function
  updateTask(2, 'Grocery Shopping');  // Updates the task with id 2 to "Grocery Shopping"
  console.log(tasks);
  