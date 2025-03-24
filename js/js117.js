const arrayA = [100, 200.25, 300.84, 400.3];
console.log(arrayA.map((a)=> a.toFixed(2)));


const arrayB = [0, 5, 10, 7, 6, 5, 0];
console.log(arrayB.map((b)=>{
    const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  // Check if the input monthNumber is between 1 and 12
  if (b <= 12) {
    return months[b];  // Convert to 0-based index
  } else {
    return "Invalid month number";  // Return an error message for invalid input
  } 
  }));
  
  
  
 const array = [1, 16, 81, 256, 625, 1296];
 const rel =  array.map((a)=> { 
    return Math.pow(a,1/4)
    })
console.log(rel)    