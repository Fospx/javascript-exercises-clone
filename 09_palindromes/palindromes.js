const palindromes = function (string) {

let alphaumerical = "abcdefghijklmnopqrstuvxyz0123456789";

//toLowerCase makes all the letters in the string into lowercase

//.split- splits up into an array of each letter in its own element

// .filter- using the variable we created "alphanumerical" we can use this 
// inside the argument for .filter(). it will only look for whatever is in that variable
// and leave out the ones that are not on there

// .join- joins the elements together onto one string

let originalString = string.toLowerCase().split("").filter((character) => alphaumerical.includes(character)).join("");


// splits the originalString variable into individual elements and reverses it and 
// joins it back together into one string onto the reverseString var.
let reverseString = originalString.split("").reverse().join("");

// this checks to see if they both are the same and will
// return true
return originalString == reverseString;

};

palindromes("Racecar!");

// Do not edit below this line
module.exports = palindromes;
