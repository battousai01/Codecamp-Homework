let obj = {};

function checkEmptyObj(obj){
    if (Object.keys(obj).length === 0) {
        console.log("The object is empty.");
    } else {
        console.log("The object is not empty.");
    }
}

checkEmptyObj(obj)