const user= {
    name: "John",
    surname: "Do"
};
console.log(user)

user.name = "Matt";
console.log(user)
/*Delete name property*/
delete user.name;
console.log(user)