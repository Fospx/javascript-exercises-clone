const leapYears = function(year) {

    // Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible 
    // by 400 (like 1600 and 2000, which were in fact leap years). //


    // var to hold leapYear true/false value
    // if year divided by 4 gives a remainder of 0 then it is a leap year
    // also check if the year gives a remainder of 0 when divided by 100
    // if it gives a remainder of 0 then it is not a leap year


    let leapYear;

    // checks to see if 100 is divis and also checks to see if it is divis by 400 to make sure it is a leapyear
    if ((year % 100) === 0 && (year % 400) === 0)
    {
        leapYear = true;
        return leapYear;
    }

    // first if statement: divides by 4 and checks if the remainder is 0 and returns true 
    // second if statement: divides by 100 and checks if remainder is 0 and returns false 
    if ((year % 4) === 0)
    {
        if ((year % 100 === 0))
        {
            leapYear = false;
            return leapYear;
        }
        leapYear = true;
        return leapYear;
    }
    // returns false if everything does not apply
    return false;
}
leapYears(1997);

// Do not edit below this line
module.exports = leapYears;
