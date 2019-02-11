var weight = 5;
var length = 60;
var age = 5;
var activityRate = 1.725;
var calorieRate;

var metabolism = 88.362 + (13.397 * weight) + (4.799 * length) - (5.677 * age);

console.log(metabolism);

calorieRate = Math.round(metabolism * activityRate);

var proteins = Math.round(calorieRate * 0.40);
var fats = Math.round(calorieRate * 0.25);
var carbohydrates = Math.round(calorieRate * 0.35);