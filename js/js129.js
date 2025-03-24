const array = [1, 3, 5, 7, 9, 11];

const startElement = 4;
const endElement = 8;


console.log(array.filter((a)=>{
    if(a > startElement && a < endElement){
        return a;
    }
}))