let age = 22;

if (age >= 18) {
  console.log("You CAN vote!");
} else {
  console.log("You CANNOT vote!");
}

// Ternary Operator => One liner if else
let result = age >= 18 ? "You CAN vote!" : "You CANNOT vote!";

console.log(result);

// If else if
let weather = "winter";
if (weather === "summer") {
  console.log("You can eat ICE CREAM");
} else if (weather === "winter") {
  console.log("You can have Gulab Jamun");
} else {
  console.log("Better luck next time");
}

let rating = 2;
switch (rating) {
  case 1:
    console.log("1 Star Rating");
    break;
  case 2:
    console.log("2 Star Rating");
    return 1; // wrong
  case 3:
    console.log("3 Star Rating");
    break;
  case 4:
    console.log("4 Star Rating");
    break;
  case 5:
    console.log("5 Star Rating");
    break;

  default:
    console.log("You haven't been rated!");
}

console.log("end");
