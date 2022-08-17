/**write a script of a while loop that prints the lyrics of "99 bottles of beer" out on the console*/

var numberOfBottles = 99;

function lyrics(numberOfBottles) {
  while (numberOfBottles >= 1){
    console.log(numberOfBottles + " bottles of bear on the wall, " + numberOfBottles + "bottles of beer.\n")
    console.log("Take one down and pass it around, " + (numberOfBottles - 1) + " bottles of the beer on the wall.")
    numberOfBottles--;
  }
}
lyrics(numberOfBottles);

console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");

//No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.