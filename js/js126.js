const array = [
    { name: 'Ben', age: 14 },
    { name: 'Phil', age: 18 },
    { name: 'John', age: 32 },
    { name: 'Ann', age: 16 },
    { name: 'Paul', age: 24 }
  ];
     console.log( array.filter((a) => {
          if(a.age >= 18){
              return a
          }
      }))