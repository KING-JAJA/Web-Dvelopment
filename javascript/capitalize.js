//write a script that prompts the user for their name, then displays their name with only the first letter in uppercase.

var uname = prompt("Enter your name?");
var firstchar = uname.slice(0,1);
var firstchar_upper = firstchar.toUpperCase();

var othrchar = uname.slice(1,uname.length);
var othrchar_lower = othrchar.toLowerCase();

var capitalized_name = firstchar_upper + othrchar_lower;
alert("Hello, " + capitalized_name + "!");