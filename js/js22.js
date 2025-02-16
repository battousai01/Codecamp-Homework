let Input = prompt("Type number:");
/*console.log(Input);*/

if (Input > 0) { 
    console.log("Positive number");
}
else if(Input == 0){
    console.log("Zero");
}
else if(Input < 0){
    console.log("Negative number");
}
else {
    console.log("Invalid number");
}