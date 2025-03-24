const arrayA = [9, 17, 23, 5];
console.log(arrayA.filter((a)=> a>10))

const arrayB = [1, 2, 3, 4];
console.log(arrayB.filter((b)=>{
        if(b % 2 != 0){
            return b
        }
    }))
    
const array = [1, '1', 2, {}];
console.log(array.filter((a)=>{
        if(typeof a === "number"){
            return a;
        }
    }))