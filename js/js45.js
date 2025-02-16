let number = prompt("Enter your number:",);
let guest = null; 
while( number!==guest){
    guest=prompt("Enter your guest number:",)
    if(number>guest){
        console.log("your guest less than the real number");
    }
    else if(number<guest){
        console.log("your guest more than the real number");
    }
    else{
        console.log("Right number");
    }
    
}
