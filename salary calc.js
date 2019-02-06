// Calculate Expences

var incomeTax = 13;
var contributions = 30;

var calculateExpences = function (netSalary) {
  var totalCost = Math.round((netSalary * 100) / (100 - incomeTax) * (100 + contributions) / 100);
  return totalCost;
};
