let inputA = prompt("Enter input A:");
let inputB = prompt("Enter input B:");
inputA = Number(inputA);
inputB = Number(inputB);
if(isNaN(inputA) || isNaN(inputB)){
    console.log("Invalid number");
}
else{
    console.log("Sum is:", inputA + inputB);
}