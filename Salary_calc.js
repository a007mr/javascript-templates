var calculateSalary = function (dirtySalary) {
  
  var clearSalary = Math.round(dirtySalary * 0.65);
  
  if (dirtySalary >= 100000) {
    var clearSalary = Math.round(dirtySalary * 0.55);
  }
  return clearSalary;
  
};



console.log('Salary without tax ' + calculateSalary(100000) + ' USD');