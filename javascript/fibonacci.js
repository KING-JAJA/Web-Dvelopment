/**
 * Fibonacci challenge
 * Create a fibonacci sequence generator.
 * A Fibonacci sequence is a sequence of numbers starting from zero, where every number is the sum of the two previous ones.
 */

function fibonacciGenerator (n) {
  var output = [];
  if (n === 1) {
    output = [0];
  }
  else if (n === 2) {
    output = [0, 1];
  }
  else {
    output = [0, 1];

    for (var i = 2; i < n; i++) {
      output.push(output[output.length -2] + output[output.length - 1]);
    }
  }

  return output;

}

output = fibonacciGenerator(Number(prompt("Enter Fibonacci Range:")));
console.log(output);