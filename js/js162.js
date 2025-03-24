let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  
  function checkAge({ firstName, lastName, age }){
      if(age > 18){
          console.log(`Hello ${firstName} ${lastName}`)
      }
      else{
          console.log("Access denied")
      }
  }
  checkAge(person)