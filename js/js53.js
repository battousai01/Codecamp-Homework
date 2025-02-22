let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  let totalSalary = Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
  console.log(totalSalary);