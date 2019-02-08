// Calculator

var calculate = function (firstNumber, secondNumber, operator) {
  var first = parseInt(firstNumber, 10);
  var second = parseInt(secondNumber, 10);
  
  if (operator == '+') {
    return first + second;
  }
  
  if (operator == '-') {
    return first - second;
  }
  
  if (operator == '/') {
    return first / second;
  }
  
  if (operator == '*') {
    return first * second;
  }
}