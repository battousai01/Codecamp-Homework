const Seat = ["AA","BB","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","Sl","SM","SN","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"];

let us = prompt("enter seat:");
if(Seat.indexOf(us)===0 ){
    console.log("Price is:6,500");
}
else if(Seat.indexOf(us) === 1){
    console.log("Price is:5,500");
}
else if(Seat.indexOf(us)>1 && Seat.indexOf(us) < 15){
    console.log("Price is:5,000"); 
}
else{
    console.log("Price is:4,000");
}