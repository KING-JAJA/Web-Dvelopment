/**
 * Create a random number generator that takes two names as in put, and then randomly generates a number from 1 to 100, as the love percentage.
 */

function loveCalculator (firstName = prompt("Enter First-Name:"), secondName = prompt("Enter Second-Name:")){
  var n = Math.random();
  n = n * 100;
  n = Math.floor(n) + 1;
  console.log("The love percentage for " + firstName + " and " + secondName + " is " + n + "%.");
  //return n;
}

loveCalculator()