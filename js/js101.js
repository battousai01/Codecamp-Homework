let arr = [1, 2, 3, 4, 5];


function Condition(arr,n){
    if(n === undefined || n === 1){
        console.log("undefined")
    }
    else if(n>1){
        console.log(arr.slice(0,n))
    }
    else{
        console.log("error no condition metting")
    }
}

Condition(arr,2)