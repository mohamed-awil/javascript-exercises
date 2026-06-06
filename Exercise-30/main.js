function operate (num1,num2,callback) {
return callback(num1,num2);
}


// addition
function add (num1,num2) {
return num1 + num2;
}


// subtraction
function subtract (num1,num2) {
return num1 - num2;
}


// multiplication
function multiply (num1,num2) {
return num1 * num2;
}


// division
function divide (num1,num2) {
return num1 / num2;
}

console.log("addition:", operate(20,35,add));
console.log("subtraction:", operate(36,6,subtract));
console.log("multiplication:", operate(5,5,multiply));
console.log("division:", operate(4,2,divide));