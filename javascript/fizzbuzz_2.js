/**
 * Write a program that prints the number 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers which are multiples of three and five print "FizzBuzz".
 */

 var output = [];
 var count = 1;
 
 function fizzbuzz() {

  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0){
      output.push("FizzBuzz");
  } else if (count % 3 === 0) {
      output.push("Fizz");
  } else if (count % 5 === 0) {
      output.push("Buzz");
  } else {
      output.push(count);
  }
  count++;
  }
   console.log(output);
 }
fizzbuzz();