function getUserData({ firstName, favoriteColor = 'green' }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // *Your name is Alejandro and you like purple
  console.log(getUserData({ firstName: 'Melissa' })); // **Your name is Melissa and you like green
  console.log(getUserData({})); // ***Your name is undefined and you like green
  /*getUserData is used object destructuring to extract two properties: firstName and favoriteColor.
  
  firstName: This property is required from the input object, and its value will be assigned to the firstName variable.
  favoriteColor: This property is optional. If the favoriteColor is not provided in the input object, it will default to 'green'.
  The function is called with an object: { firstName: 'Alejandro', favoriteColor: 'purple' }.
  Destructuring assigns the value 'Alejandro' to firstName and 'purple' to favoriteColor.
  The function is called with an object: { firstName: 'Melissa' }.
  Destructuring assigns the value 'Melissa' to firstName, but favoriteColor is not provided in the object.
  Since favoriteColor has a default value of 'green', the function uses this default value.
  The function is called with an empty object: {}.
  Destructuring attempts to extract firstName and favoriteColor, but since the object is empty:
  firstName is undefined because the property does not exist.
  favoriteColor defaults to 'green', because the default value for favoriteColor is 'green'.*/