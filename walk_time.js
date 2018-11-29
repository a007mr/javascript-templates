var temperature = 20;
var isRaining = true;
var minutes = 0;

if (isRaining) {
  console.log('It is rain on the street. Let stay at home);
}
else {
  if (temperature < 10){
    minutes = 0;
  }
  if (temperature >= 10 && temperature < 15) {
    minutes = 30;
  }
  if (temperature >= 15 && temperature < 25) {
    minutes = 40;
  }
  if (temperature >= 25 && temperature <= 35) {
    minutes = 20;
  }
  if (temperature > 35) {
    minutes = 0;
  }
}