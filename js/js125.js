const arrayA = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
  console.log(  arrayA.filter((a)=>{
        if(a[0] === "E"){
            return a;
        }
    }))



const arrayB = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
   console.log( arrayB.filter((b)=> {
        if(b === b.toUpperCase()){
            return b;
        }
    }))



const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
console.log(array.filter((a)=> a.includes("buri")));