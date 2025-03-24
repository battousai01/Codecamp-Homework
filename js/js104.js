let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  //Use Object.values
  let sumByObjectvalues = Object.values(salaries).reduce((acc, salary) => acc + salary, 0);
  console.log(sumByObjectvalues); // Output: 390
  
  //Use Object.keys
  let sumByObjectkeys = Object.keys(salaries).reduce((acc, key) => acc + salaries[key], 0);
  console.log(sumByObjectkeys)
  
  //Use Object.entries
  let sumByObjectentries =  Object.entries(salaries).reduce((acc, [key, salary]) => acc + salary, 0);
  console.log(sumByObjectentries)