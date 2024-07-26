const removeFromArray = function() {


 // check if the first part of the function argument is an array
 if (Array.isArray(arguments[0]) === true)
 {
    array = arguments[0];    
           
 }

let word = "";
for (i = 0; i < array.length; i++)
{
    word += array[i];
}

 return word;


};

removeFromArray([1,2,3,4], 3)

// Do not edit below this line
module.exports = removeFromArray;
