// create a var to hold the answer
const convertToCelsius = function(fahrenheit) {

// var holder for answer
let celsius_answer = 0; 

// F = (x-32) * 5/9
// formula calculation to convert fahrenheit to celsius
celsius_answer = (fahrenheit - 32) * 5/9 
return Number(celsius_answer.toFixed(1));

};

const convertToFahrenheit = function(celsius) {

// C = (x * 9/5 + 32)
let fahrenheit_answer = 0;

fahrenheit_answer = (celsius * 9/5 + 32)
return Number(fahrenheit_answer.toFixed(1));


};


convertToCelsius(32);
convertToFahrenheit(0)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
