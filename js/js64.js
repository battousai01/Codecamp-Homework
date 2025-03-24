let user = {
    name: 'John',
    sayHi: function () {
      console.log(this.name);
    }
  };
  
  (user.sayHi)(); // undefined because of it's treated as a regular function call, 
                  // not as a method of the user object when a function is called in a non-method context (like this), 
                  // this defaults to the global object .So in strict mode, this would be undefined