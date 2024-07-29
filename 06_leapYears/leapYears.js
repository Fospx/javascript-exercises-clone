const leapYears = function(year) {
    
    let answer = 0;
    let check_if_integer;
    answer = year / 4
    check_if_integer = Number.isInteger(answer);

    if (check_if_integer === true)
    {
        return true;
    }
    else return false;

};

leapYears(2000);

// Do not edit below this line
module.exports = leapYears;
