let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    'Raindrops on roses',
    'whiskers on kittens',
    'Bright copper kettles',
    'warm woolen mittens',
  ];
  console.log(raindrops); // * Raindrops on roses
  console.log(whiskers); // ** whiskers on kittens
  console.log(aFewOfMyFavoriteThings); // *** [ 'Bright copper kettles', 'warm woolen mittens' ]
  /*  [raindrops, whiskers, ...aFewOfMyFavoriteThings] is used 
      array destructuring, which is a way of extracting values from an array and assigning them to variables.
  
      raindrops: The first value of the array ('Raindrops on roses') is assigned to the raindrops variable.
      whiskers: The second value of the array ('whiskers on kittens') is assigned to the whiskers variable.
      ...aFewOfMyFavoriteThings is used rest operator (...) to collect the remaining elements in the array into a new array
          [ 'Bright copper kettles', 'warm woolen mittens' ]*/