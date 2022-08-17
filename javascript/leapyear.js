/**
 * write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in february.
 * This is how to work out whether if a particular year is a leap year.
 * On every year that is evenly divisible by 4, except every year that is evenly divisible by 100, unless the year is also evenly divisible by 400
 */

function isLeap(year){
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

isLeap(prompt("Enter the year:"));