const repeatString = function(string, times) {

  let text = "";

  if (times < 0) return "ERROR";

  for (i = 0; i < times; i++) {
    text += string;
  }
  
  return text;

};

// Do not edit below this line
module.exports = repeatString;
