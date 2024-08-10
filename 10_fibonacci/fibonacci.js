const fibonacci = function(position) {

// calculate the numbers 
// use the position as the length of how far we want to calculate 
// calculate until we hit the position
// return the position

// checks if the pos argument is a zero and returns zero if it does
if (position == 0){
    return 0;
}
else if (position == 1 || position == 2)
{
    // returns 1 if 1 or 2 pos
    return 1;
}
// returns "OOPS" if argument is negative
if (position < 0) return "OOPS";

// checks if the argument is a string 
if (typeof position !== "number")
{
    // if it passes as not a number then it converts it to a string
    position = parseInt(position);
}



// if we got here then start with the 3rd position

// declare array that already has the first two positions
const fib = [0, 1];
// starts at 2 because in the array that is the 3rd position
for (i = 2; i <= position; i++)
{
    // using the fibonacci formula I found,  i = position 
    fib[i] = fib[i - 1] + fib[i - 2];
}

// returns the position inside the array with the correct element number.
return fib[position];

}
// in this case the 6th position in the array is = 8;
fibonacci(6)

// Do not edit below this line
module.exports = fibonacci;
