function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  console.log("buy " + calcBottles(money, 1.5) + " bottles of Milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {

  var numberOfBottles = Math.floor(startingMoney / costPerBottle);

  return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle){
  var change = startingAmount % costPerBottle;
  return change;
}

console.log("Hello Master, here is your " + getMilk(prompt("Enter amount:"), prompt("Enter cost per bottle:")) + " change.")

//getMilk(5, 1.5);
//getMilk(prompt("Enter amount:"), prompt("Enter cost per bottle:"));