var days = 9;  
var period = 3; 
var workDayAmount = 200; 
var weekendAmount = 100; 


var total = 0;

for (var i = 0; i <= days; i += period) {

if (( i % 7 === 0 || i % 7 === 6) && i != 0) {
  total += weekendAmount;
  }
  else if (i != 0) {
    total += workDayAmount;
    }
}
console.log(total);