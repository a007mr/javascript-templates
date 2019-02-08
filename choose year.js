

var targetYears = [];

var getYears = function (firstYear, lastYear, sum) {
  
  for (firstYear; firstYear <= lastYear; firstYear++) {
  
     var num = 0;
     for (var i = 0; i <= 3; i++) {
       num += +firstYear.toString()[i];
     }
     if (num == sum) {
       targetYears.push(firstYear);
     } 
    }
    return targetYears;
};