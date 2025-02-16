const input = prompt('Enter a number: ');
switch (input) {
    case "1":
      alert("One");
      break;
    case "0":
      alert("Zero");
      break;
    case "-1":
      alert("Minus");
      break;
    default:
      console.log(`Please enter only this number 0,-1,1`);
  }