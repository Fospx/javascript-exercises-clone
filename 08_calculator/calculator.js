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

const multiply = function(array) {

  let multiplyAnswer = 1;

  for (i = 0; i < array.length; i++)
  {
    multiplyAnswer *= array[i];
  }

  return multiplyAnswer;
};

multiply([4, 5])

const power = function(number, power) {
	
  let powerAnswer = 1;

  let repeatTimes = power;

  for (i = 0; i < repeatTimes; i++)
  {
    powerAnswer *= number;
  }

  return powerAnswer;
};

const factorial = function(number) {
	
  let factorialAnswer = 1;
  let length = number;

  for (let i = 1; i <= length; i++ )
  {
    factorialAnswer *= i;
  }

  return factorialAnswer;

};

factorial(1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
