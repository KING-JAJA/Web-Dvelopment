//BMI Calculator
/**
 * create a BMI calculator using javascript functions.
 * The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.
 * You can calculate it using the formula below, where weight divided by height squared.
 * BMI = weight(kg)/height^2(m^2)
 */

function bmiCalculator(weight, height){
  var BMI = weight/(height^2);
  //var BMI = weight/(height * height);
  //var BMI = weight/Math.pow(height, 2);
  return Math.round(BMI);
}

console.log("Your BMI is " + bmiCalculator(prompt("Enter weight:"), prompt("height")) + " kg/m^2");