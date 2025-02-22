const obj = {};
let stop = false;

while(stop === false){
    let product = prompt("enter product:");
    let price = prompt("enter price:");
    let quantity = prompt("enter quantity:");
    let discount = prompt("enter discount:");
    stop = prompt("If want stop type true continue type false:") === "true";
    
     obj[product] = {
            price: price,
            quantity: quantity,
            discount: discount
        };
    if (discount === "0" || discount ==="") {
        delete obj[product].discount;
    }  
}

console.log(obj);