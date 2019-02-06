// Array Sorting

var numbers = [1, 3, 5, 7, 9, 11];

for (var i = 0; i <= numbers.length - 1; i++) {
  for (var j = i + 1; j < numbers.length; j++) {
    var swap = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = swap;
  }
}