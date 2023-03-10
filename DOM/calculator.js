//Higher order functions are functions that can take other functions as inputs.
function add(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  return num1 / num2;
}

function calculator(num1, num2, operator){
  return operator(num1, num2);
}

calculator(4, 7, multiply);