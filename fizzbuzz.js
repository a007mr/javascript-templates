var number = 15;
var taskResult;


if (number % 3 === 0) {
  taskResult = 'Fizz';
}

if (number % 5 === 0) {
  taskResult = 'Buzz';
}
  
if (number % 15 === 0) {
  taskResult = 'FizzBuzz';
}
  
if (taskResult !='Buzz' && taskResult !='Fizz' && taskResult != 'FizzBuzz') {
  taskResult = number;
}
