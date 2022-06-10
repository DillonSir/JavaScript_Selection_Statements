console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const num = 25;

let userInput = window.prompt("Guess a number between 1 and 100:");

if (userInput < num) {
  alert("Too low");
} else if (userInput > num) {
  alert("Too high");
} else {
  alert("Congratulations!!!. You guessed correctly!");
}

// Exercise 2
let birthMonth = window
  .prompt('Enter your birth month (e.g. "december"):');

switch (birthMonth) {
  case "december":
  case "january":
  case "february":
  case "march":
    alert("You were born in Winter.");
    break;
  case "april":
  case "may":
    alert("You were born in Spring.");
    break;
  case "june":
  case "july":
  case "august":
  case "september":
    alert("You were born in Summer.");
    break;
  case "october":
  case "november":
    alert("You were born in Fall.");
    break;
  default:
    alert("I don't know that month.");
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch(typeId) {
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-Shirt";
  case "03":
    type = "Long Sleeve";
  case "04":
    type = "Sweat Shirt";
  default:
    type = "Other";
}

switch(colorId) {
  case "BL":
    color = "Black";
  case "BU":
    color = "Blue";
  case "RD":
    color = "Red";
  case "PU":
    color = "Purple";
    break;
  default:
    type = "White";
}

switch(sizeId) {
  case "S":
    size = "Small";
  case "M":
    size = "Medium";
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
  default:
    size = "One size fits all";
}

console.log(`Product: ${size} ${color} ${type}`);