const cars = ['volvo', 'toyota', 'honda', 'ford'];
const rePlace = ['mazda','bmw','nissan'];

/*Check the value that want to replace exist in array or not*/
if(cars.indexOf('honda')!==-1){
    let elementsAfterTarget = cars.slice(cars.indexOf('honda')+1)
    console.log(elementsAfterTarget);
    /*Replace value at after tatget element*/
    cars.splice(cars.indexOf('honda')+1,cars.length-(cars.indexOf('honda')+1),...rePlace)
    console.log(cars)
    /*Append remain element after target in original array back to modified array*/
    cars.push(...elementsAfterTarget);
}

console.log(cars)


/*cars.length-(cars.indexOf('honda')+1) คือ การหาจำนวน element ทั้งหมดที่ต่อจากตำแหน่งที่ต้องการแทนที่*/