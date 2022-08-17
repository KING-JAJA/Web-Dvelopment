/**
 * Create a random number generator that takes two names as in put, and then randomly generates a number from 1 to 100, as the love percentage.
 */

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //1 - 100

if (loveScore > 70) {
  alert("Your love is " + loveScore + "%" + "You love each other like Kanye loves Kanye.");
}

if (loveScore > 30 && loveScore <= 70) {
  alert("Your lovescore is " + loveScore + "%.")
}

if (loveScore <= 30) {
  alert("Your love score is " + loveScore + "%, " + "You go together like Oil and water.");
}