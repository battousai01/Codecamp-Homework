let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john,jo,jin];
    /*arr.filter((a)=> {
        console.log(a.name)
        console.log(arr.length)
        })*/
function getAverageAge(arr){
        let sum = arr.reduce((accumulator,current) => {
                return accumulator + current.age;
        },0)
        let average = sum/arr.length;
        return average.toFixed(2);
}
console.log(getAverageAge(arr))
