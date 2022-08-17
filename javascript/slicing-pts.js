//write a script that prompts a user for input, and then cuts the input down to 140 charaters.

var tweet = prompt("Compose your tweet:");
var tweetSize = tweet.slice(0,140);
alert(tweetSize);

//alert(prompt("What is your name:"));