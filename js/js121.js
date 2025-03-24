const array = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-01' },
    { name: 'watermelon', birth: '1985-12-01' }
  ];
  
    const result = array.map(item => {
    const birthDate = new Date(item.birth);/*get birthdate from item by using item.birth and convert it to date by using new Date()*/
    
    // Set current year to 2021
    const today = new Date('2021-01-01');  // Set a fixed date with the year 2021
    
    // Calculate age by subtracting birth year from 2021
    let age = today.getFullYear() - birthDate.getFullYear();//get year value from today and birthdate by using getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth();/*get month value from today and birthdate by using getMonth()*/
    
    
    
    // Adjust age if birthday hasn't occurred yet in 2021
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    /*if monthDifference is less than 0 it mean birthday hasn't occured yet in 2021 so decrease age by 1*/
    /*if today.getDate() is less than birthDate.getDate() it mean birthday hasn't occured yet in 2021 so decrease age by 1*/

    // Add the age property
    return { ...item, age };
  });
  
  console.log(result);
  