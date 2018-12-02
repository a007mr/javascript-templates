var qualificationDistance = 200;
var attempts = [120, 150, 160, 201, 203, 180, 202];
var qualified = false;
var averageBest = 0;

// Sorting in for loop of array
for (var currentIndex = 0; currentIndex <= attempts.length - 2; currentIndex++) {
  var minValue = attempts[currentIndex];
  for (var j = currentIndex + 1; j <= attempts.length - 1; j++) {  
    if (attempts[j] < minValue) {
    minValue = attempts[j];
    var swap = attempts[currentIndex];
    attempts[currentIndex] = minValue;
    attempts[j] = swap;
    console.log('Change ' + swap + ' on ' + minValue);
    console.log('Array now: ' + attempts);
  }
}

console.log('The minimal element of ' + currentIndex + ' is ' + minValue);
}


// Identifying the three best jumps
console.log('Array length: ' + attempts.length);

var medianIndex1 = attempts.length - 1;
console.log(medianIndex1);
var bestJump1 = attempts[medianIndex1];
console.log(bestJump1);

var medianIndex2 = attempts.length - 2;
console.log(medianIndex2);
var bestJump2 = attempts[medianIndex2];
console.log(bestJump2);

var medianIndex3 = attempts.length - 3;
console.log(medianIndex3);
var bestJump3 = attempts[medianIndex3];
console.log(bestJump3);


// Calculation average of three best jumps
var averageBest = (bestJump1 + bestJump2 + bestJump3) / 3


// Identifying results of the qualification
if (averageBest > qualificationDistance) {
 qualified = true;
 console.log('Win! The average best jump is : ' + averageBest); 
}
else {
   qualified = false;
 console.log('Lose! The average best jump is: ' + averageBest); 
}
