let guest = 'Jane';
let admin = 'Pete';
[guest, admin] = [admin, guest];

console.log(guest);  // 'Pete'
console.log(admin);  // 'Jane'