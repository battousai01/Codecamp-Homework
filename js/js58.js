const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };
  /*
  1. รับ key จาก user แล้วหาว่า key ที่รับมามีอยู่ใน employees หรือไม่
  2. ถ้ามีให้แสดงข้อมูลของ key นั้นออกมา

     - ให้แสดงค่า key ในรูป Name: key เช่น Name: john
     - ให้แสดงค่า salary ในรูป Salary: 1000
     - ให้แสดงค่า address ในรูป Address: district, province เช่น Address: Ratchathewi, Bangkok
  3. ถ้า key ที่รับมาไม่มีอยู่ใน employees ให้แสดงข้อความ not found
  */


 // Get input from the user
let userInput = prompt("Enter employee name (e.g., john, peter):").toLowerCase();
// Find the employee in the object
if (employees[userInput]) {
  const employee = employees[userInput];

  // Format and display the result
  const result = `Name: ${userInput}, salary: ${employee.salary}, address: ${employee.address.district}, ${employee.address.province}`;
  alert(result); // Display result in an alert box
} else {
  alert("Employee not found.");
}