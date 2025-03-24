const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
  ];
  
  // Group persons by sex
  let groupedPersons = persons.reduce((group, person) => {
    // If the sex doesn't exist in the group, initialize it with an empty array
    if (!group[person.sex]) {
      group[person.sex] = [];
    }
    // Add the person to the corresponding sex group
    group[person.sex].push(person);
    return group;
  }, {});
  
  console.log(groupedPersons);
  