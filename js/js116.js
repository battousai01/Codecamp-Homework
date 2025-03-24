const arrayA = ['apple', 'banana', 'orange'];
console.log(arrayA.map((a) => a.toUpperCase()));


 const arrayB =  [1, 3, 4, 5, 6, 7, 8]; 
 console.log(arrayB.map((b) => {
     if(b %2 === 0){
         return "even"
     }else{
         return "odd"
     }
 }))
 	

const array = [1, -3, 2, 8, -4, 5];
 console.log(array.map((a) => {
      return Math.abs(a);
  }))