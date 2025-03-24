const arrayA = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
 console.log(arrayA.filter((a) => {
     if(a.length > 6){
         return a;
     }
 }))
 
 
 
 const arrayB = [1, -3, 2, 8, -4, 5];
 console.log(arrayB.filter((a) => {
     if(a > 0){
         return a;
     }
 }))
 
 
 const array = [1, 3, 4, 5, 6, 7, 8];
  console.log(array.filter((b) => {
     if(b % 3 ===  0){
         return b;
     }
 }))