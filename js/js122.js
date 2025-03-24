const array = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-01' },
    { name: 'watermelon', birth: '1985-12-01' }
  ];
  
  const result = array.map(item => {
    const birthDate = new Date(item.birth); /* get the birth date from the object in array */
    // Format the birth date as "DD MMM YYYY"
    const formattedDate = birthDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  
    // Generate the HTML table row string
    return `<tr><td>${item.name}</td><td>${formattedDate}</td></tr>`;
  });
  
  console.log(result);
  