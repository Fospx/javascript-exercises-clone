const add = function(x, y) {
	let addAnswer = 0; 
  
  addAnswer = x + y;

  return addAnswer;

};


const subtract = function(x, y) {
	let subtractAnswer = 0;

  subtractAnswer = x - y;

  return subtractAnswer;

};

const sum = function(array) {
	let sumAnswer = 0; 

  for (i = 0; i < array.length; i++)
  {
    sumAnswer += array[i];
  }

  return sumAnswer;
};

sum([7,7])

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
