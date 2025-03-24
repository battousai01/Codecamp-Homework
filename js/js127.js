const array = [
    { id: 1, name: 'Pepsi' },
    { id: 2, name: 'Mirinda' },
    { id: 3, name: 'Coke' },
    { id: 4, name: 'Fanta' },
    { id: 5, name: 'Sprite' }
  ];
     console.log( array.filter((a) => {
          if(a.id != 4){
              return a
          }
      }))