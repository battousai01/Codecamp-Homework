var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();
console.log(user.ref.name); // **Joe** because this is not a method of the user object,
                            // it is a method of the global object, which is the window object in the browser.