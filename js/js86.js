function extractCurrencyValue(string,rate){
    return Number(string)*rate;
}

console.log(extractCurrencyValue('120',30))
