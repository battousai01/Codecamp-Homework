const obj = {};

function isEmpty(obj){
    if (Object.keys(obj).length === 0) {
        console.log("Object is empty");
    } else {
        console.log("Object is not empty");
    }
}
isEmpty(obj)