let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250
  };
  
  
  function topSalaries(salaries){
      if (Object.keys(salaries).length === 0) {
          console.log("The object is empty.");
      } else {
         console.log("not empty")
         /*Find max salary key*/
         let maxKey = Object.entries(salaries).reduce((max, [key, value]) => {
             /*console.log(Object.entries(salaries))
             console.log("max=",max)
             console.log("key,[value]=",[key,value])*/
                    return value > max.value ? { key, value } : max;
             },{ key: '', value: -Infinity }).key;
            return maxKey
      }
      
  }
  console.log(topSalaries(salaries))
  
  /*
    First we need to compare the value in each prpeorty of the object. we wil use array to 
    compare the value of each property. 
        -   convert the object to array using Object.entries()
            -   the result is array of arrays
                -   [ [ 'John', 100 ], [ 'Pete', 300 ], [ 'Mary', 250 ] ]
        -   use reduce to compare the value of each property
            -   reduce((max, [key, value]) => {
                        return value > max.value ? { key, value } : max;
                    }, { key: '', value: -Infinity }).key;

                    -   callback function
                            (max, [key, value]) => {
                                return value > max.value ? { key, value } : max;
                            }
                    -   initial value
                            { key: '', value: -Infinity }

                    First Iteration ([key = 'a', value = 10]):
                        The callback function is called with the accumulator max = { key: '', value: -Infinity } 
                        and the current key-value pair [key = 'a', value = 10].
                        The comparison value > max.value becomes 10 > -Infinity, which is true. Since true, 
                        the accumulator (max) is updated to { key: 'a', value: 10 }.
                    
                    Second Iteration ([key = 'b', value = 20]):
                        The callback function is called with the accumulator max = { key: 'a', value: 10 } 
                        and the current key-value pair [key = 'b', value = 20].
                        The comparison value > max.value becomes 20 > 10, which is true. Since true, 
                        the accumulator (max) is updated to { key: 'b', value: 20 }.

                    Third Iteration ([key = 'c', value = 30]):
                        The callback function is called with the accumulator max = { key: 'b', value: 20 } 
                        and the current key-value pair [key = 'c', value = 30].
                        The comparison value > max.value becomes 30 > 20, which is true. Since true, 
                        the accumulator (max) is updated to { key: 'c', value: 30 }.

                    The final result is { key: 'c', value: 30 }.
                    -   return the key of the max value

                    so the result from reduce is { key: 'Pete', value: 300 }

                    then we want the key of the max value so we return maxKey.key
                        -   { key: 'Pete', value: 300 }.key
                            -   'Pete'

        Note:   max and [key, value] are in same format  
                    { key: '', value: -Infinity } = [key, value]

                [key, value] is a destructuring assignment. It allows you to unpack values from arrays, 
                             or properties from objects, into distinct variables.

                             example:  [key, value] is used to unpack the array into two separate variables: key and value.
                                        so  [ 'John', 100 ] will be unpacked to 
                                        key = 'John' 
                                        value = 100

  */