const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false;
  console.log(user); // { email: 'cc@gmail.com', isActive: false }
  /*user = {};*/
  console.log(user); // { email: 'cc@gmail.com', isActive: false }
  //isActive will have false value because user.isActive = false; is assign false
  // value to isActive in user