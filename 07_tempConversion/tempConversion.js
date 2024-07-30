// create a var to hold the answer
const convertToCelsius = function(fahrenheit) {

// F = (x-32) * 5/9

let fahrenheit_answer = 0; 

fahrenheit_answer = Math.round((fahrenheit - 32) * 5/9) 

return fahrenheit_answer;

};

const convertToFahrenheit = function(celsius) {

// C = (x * 9/5 + 32)



};


convertToCelsius(32);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
