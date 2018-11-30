var days = 9; // Days in the period
var evenDayAmount = 200; // Amount of protein in even day
var oddDayAmount = 100; // Amount of protein in odd day
var total = 0; // Total amount of protein

for (var i = 1; i <= days; i++) {
  
  if (i % 2 === 0) {
    total += evenDayAmount;
  }
  else {
    total += oddDayAmount;
  }
  
  console.log('total: ' + total);
  
}