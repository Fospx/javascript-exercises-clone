const leapYears = function(year) {


    // create a variable to hold the value of the year
    // make the calculations, //
    // see if it is divisable by 4 and gives us an integer and/or check to see if it is divisble by 400 and gives us an integer
    // if it does give an integer... we are not done yet because....
    // check to see if dividing by 100 gives us an integer
    // if it does, then return false because the year divided by 100 is not a leap year
    // else if it does not return an integer then it is a leap year and divisble by 4 or by 400.

let leapYears; 

if ((year % 4) === 0)
{
    if ((year % 4) === 0 && (year % 100) === 0)
    {
        leapYears = false
        return leapYears
    }
    leapYears = true;
    return leapYears;
}

if ((year % 100) === 0) {
    if ((year % 400) === 0)
    {
        leapYears = true;
        return leapYears;
    }
    leapYears = false;
    return leapYears
}

}
leapYears(1997);

// Do not edit below this line
module.exports = leapYears;
