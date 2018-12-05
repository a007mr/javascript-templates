var poly = 1507;
var ylop = 0;
var isPalindrome = false;
var number = poly;

while (number >= 1) {
  ylop = ylop * 10 + number % 10;
  number = Math.floor(number / 10);
  console.log('ylop: ' + ylop)
  console.log('poly: ' + poly)
}

if (ylop == poly) {
  isPalindrome = true;
}

console.log(isPalindrome)

// A loop for identifying palindrome