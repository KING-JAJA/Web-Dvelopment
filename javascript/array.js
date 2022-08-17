/**
 * Create an array that holds the names of guests of an event.
 * 
 * 
 * write a script that prompts a  user to input his name, and then checks if the name inputed is contained in the array, then displays an alert to welcome every user that is contained in the guestlist, and also dismisses the users that are not contained in the list.
 */

var guestList = ["Angela", "David", "Samuel", "Paul", "James"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)){
  alert("Welcome!");
} else {
  alert("Sorry, maybe next time.");
}