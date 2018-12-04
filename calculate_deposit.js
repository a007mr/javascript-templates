var calculateDeposit = function (deposit, percent, time, cap) {
  if (cap) {
    for (var i = 1; i <= time; i++ ) {
      deposit += deposit * percent/(12 * 100);  
    }
    return Math.round(deposit);
  } 
  deposit += Math.round((percent / (12 * 100)) * time * deposit);
  return deposit;
};

calculateDeposit(100000, 10, 2, true); 