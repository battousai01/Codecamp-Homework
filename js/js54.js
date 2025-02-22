let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };
  
  
  function multiply(obj,multi){
      for (let key in obj) {
          
        if (typeof obj[key] === 'number') {
            obj[key] *= multi;  // Multiply the numeric value by 2 (or any multiplier you want)
        }
    }
  }
multiply(menu,5)

console.log(menu)