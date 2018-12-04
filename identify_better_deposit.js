var initialAmount = 50000;
var depositDuration = 12;
var simplePercent = 7;
var complexPercent = 6;

var recommendedType;
var finalAmount;

    var finalAmountSimple;
  finalAmountSimple = initialAmount + simplePercent / (12 * 100) * depositDuration * initialAmount; 
  console.log(finalAmountSimple);
  
  
  var finalAmountComplex = initialAmount;
  for (var i = 1; i <= depositDuration; i++ ) {
      finalAmountComplex += finalAmountComplex * complexPercent/(12 * 100);  
    }
  console.log(finalAmountComplex); 
 
   if (finalAmountSimple > finalAmountComplex) {
  recommendedType = 'simple';
  finalAmount = Math.round(finalAmountSimple);
  } else {
  recommendedType = 'complex';
  finalAmount = Math.round(finalAmountComplex);
  }
 

