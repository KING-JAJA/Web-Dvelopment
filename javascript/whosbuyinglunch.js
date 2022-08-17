names = ["Angela", "David", "Samuel", "Paul", "James"]

function whospaying(names) {

  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];

  return randomPerson + " is going to buy lunch today";
}
whospaying(names);