// Calc Roots

var calculateRoots = function (a, b, c) {
  var D = b * b - 4 * a * c;
  if (D < 0) {
    return 'Корней нет';
  }
  else if (D === 0) {
    var x = -b / (2 * a);
    return 'Корень равен ' + x;
  }
  else if (D > 0) {
    var x1 = (-b + Math.sqrt(D)) / (2 * a);
    var x2 = (-b - Math.sqrt(D)) / (2 * a);
    return 'Первый корень равен ' + x1 + ', второй корень равен ' + x2;
  }
};