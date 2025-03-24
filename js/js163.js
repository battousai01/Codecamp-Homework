let user = {
    name: 'John',
    years: 27
  };
  
  /*Object destructing*/
  let { name, age, isAdmin: isAdmin = false } = user;
  console.log(name)
  console.log(isAdmin)
  console.log(age)