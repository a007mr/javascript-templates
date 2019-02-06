// Daily Diet

var getDiet = function (menu, limit) {
  
  var score = 0;
  for (var i = 0; i < menu.length; i ++) {
    if (limit > 0 && limit >= menu[i]) {
    limit -= menu[i];
    score ++;
    }
  }
  return score;
};