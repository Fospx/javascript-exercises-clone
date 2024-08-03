const palindromes = function (string) {

    // create a variable that has the original string

    // loop through the string from the end
    // compare this new string onto the original string
    // if both of theses strings are the same, then it is a palindrome
    // if it they are not the same then return as false and completely exit the program

    let originalString = string;
    let newString = ""
    for (let i  = originalString.length - 1; i >= 0; i--)
    {
        newString += string[i];
    }

    if (originalString === newString)
    {
        return true;
    }
    else return false;
    
};

palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
