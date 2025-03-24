const person = ['John', 'Jay', 'Jim', 'Jame'];
let rePlace = ['Jack','Joe'];
person.splice(person.indexOf('Jay'), 1, ...rePlace);
console.log(person)