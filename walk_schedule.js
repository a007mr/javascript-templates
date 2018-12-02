var temperature = 20;
var itsRaining = false;

var minutes;


if (itsRaining === true || temperature <= 0 || temperature >= 35) {
  minutes = 0;
}
else {
  if (temperature === 20) {
   minutes = 20;
   }
   else {
     if (temperature > 0 && temperature < 20) {
      minutes = temperature; 
      }
      else {
       if (temperature > 20 && temperature < 35) {
     minutes = 20 - (temperature - 20);
     }
     }
     }
}