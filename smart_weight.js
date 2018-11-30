var weight = 5;
var recommendation;

if (weight < 4) {
  recommendation = 'Пора перекусить';
}

if (weight >= 4 && weight <= 5.5) {
  recommendation = 'Вес в норме';
}

if (weight > 5.5) {
  recommendation = 'Пора на тренировку';
}