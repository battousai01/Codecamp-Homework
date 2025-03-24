let strB = 'don\'n be afraid\n'
function ucFirst(str){
    let capitalizedStr = str.replace(/\b\w/g, (match) => match.toUpperCase())
    return capitalizedStr
}
console.log(ucFirst(strB))