const array = [
    { name: 'John', birth: '2001-07-31' },
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Jim', birth: '1984-12-13' },
    { name: 'Jeff', birth: '1996-02-05' },
    { name: 'Joe', birth: '2002-06-13' }
  ];
  
  console.log( array.filter(item => {
    const birthDate = new Date(item.birth);  // Convert birth date string to Date object
    return birthDate.getMonth() === 5;  // June is 5 (0-based month index)
  }));
  
  
  