const sales = [
    { price: 1000, discount: 0.1},
    { price: 500, discount: 0.05},
    { price: 100},
]


// Create a new array with the price after discount
const summary = sales.map(item => {
    // Calculate the price after discount if discount exists, otherwise keep the price as it is
    const netPrice = item.discount ? item.price * (1 - item.discount) : item.price;
    
    // Return a new object with the price after discount
    return {
        netPrice    // Add the new property `priceAfterDiscount`
    };
});

console.log(summary);

/*Note
    จาก code ด้านบน จะใช้ map() ในการ iterate ใน array ชื่อ sales จากนั้นนำค่าที่ได้จากการทำงานของ callback function
    ใน map() ไปใส่ไว้ใน array ชื่อ summary 
        -item => {
        // Calculate the price after discount if discount exists, otherwise keep the price as it is
        const netPrice = item.discount ? item.price * (1 - item.discount) : item.price;
    
        // Return a new object with the price after discount
        return {
            netPrice    // Add the new property `priceAfterDiscount`
            };
        }
        
        
        คือ ส่วน callback function ของ map()
            โดยการหาราคาสินค้าหลังจาก discount แล้วคือ 
                item.price * (1 - item.discount)
                การหา discount 
                    0.1 คือ ลดราคาสินค้าลง 10% Ex สินค้าราคา 100 บาท ลดราคา 0.1 คือ ลดราคาลง 10 บาท
                    ดังนั้น ราคาสินค้าหลังจาก discount แล้วคือ  
                        100 - 10 = 90
                            or
                        100*(1-0.1) = 100*(0.9)=90

        item.discount ? item.price * (1 - item.discount) : item.price;
        if item.discount is true then calculate item.price * (1 - item.discount) else return item.price

*/
