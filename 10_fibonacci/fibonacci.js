const fibonacci = function(position) {

// calculate the numbers 
// use the position as the length of how far we want to calculate 
// calculate until we hit the position
// return the position

if (position == 0){
    return 0;
}
else if (position == 1 || position == 2)
{
    return 1;
}
if (position < 0) return "OOPS";

// checks if the argument is a string 
if (typeof position !== "number")
{
    // if it passes as not a number then it converts it to a string
    position = parseInt(position);
}



// if we got here then start with the 3rd position

const fib = [0, 1];
for (i = 2; i <= position; i++)
{
    fib[i] = fib[i - 1] + fib[i - 2];
}

return fib[position];

}
fibonacci(6)

// Do not edit below this line
module.exports = fibonacci;
