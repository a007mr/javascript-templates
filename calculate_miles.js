var calculateMiles = function (distance, isBusinessClass) {
  var percent = 0.18;
  if (isBusinessClass) {
    percent += 0.04;
  }
  if (distance > 3500) {
    percent += 0.15;
  }
  return distance * percent;
};

var calculateFlights = function (distance, isBusinessClass, milesTarget) {
  var miles = calculateMiles(distance, isBusinessClass);
  var flights = Math.ceil(milesTarget / miles);
  return flights;
};


var targets = [3000, 7500, 15000];
for (var i = 0; i < targets.length; i++) {
  var flightsVariantFirst = calculateFlights(3118, true, targets[i]);
  var flightsVariantSecond = calculateFlights(3617, false, targets[i]);
  
  console.log('Amount of flights in business class to Valency: ' + flightsVariantFirst);
  console.log('Amount of flights in econom class to Lisboa: ' + flightsVariantSecond);
  
  if (flightsVariantFirst > flightsVariantSecond) {
    console.log('You will get the free flight faster through flights in econom class to Lisboa! Amount of flights: ' + flightsVariantSecond);
  } else {
    console.log('You will get the free flight faster through flights in business class to Valency! Amount of flights: ' + flightsVariantFirst);
  }
}


