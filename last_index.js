// A program that find the last element index in the array.

var numbers = [2, 4, 7, 4, 7, 2];
var number = 4;

var lastIndex;

var lastIndex = -1; // if number doesn't match with array
for (var i = 0; i < numbers.length; i++) {
  if(number === numbers[i]) {
    lastIndex = i;
    }
}

console.log(lastIndex);

