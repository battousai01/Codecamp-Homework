function createProfile(name, surname, ...hobbies) {
    // Return an object with the required properties
    return {
      name: name,
      surname: surname,
      hobbies: hobbies,
      numberOfHobbies: hobbies.length
    };
  }
  
  // Example usage:
  const profile = createProfile("John", "Doe", "reading", "swimming", "cycling");
  
  console.log(profile);  
  