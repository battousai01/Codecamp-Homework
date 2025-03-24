let arr = [1, 2, 3];
let notArr = "Hello, world!";


function isArray(input){
    if(Array.isArray(input)){
        console.log("input is array")
    }
    else{
        console.log("input is not array")
    }
}
isArray(notArr)


