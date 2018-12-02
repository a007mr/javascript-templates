var time = 15;

var goToDairy = false;
var goToStore = false;
var goToMarket = false;


if (time >= 8 && time < 13 || time >= 14 && time < 19) {
  goToDairy = true;
}

if (time >= 13 && time < 14) {
   goToStore = true;
 }
 
if (time >= 7 && time < 8 || time >= 19 && time < 20) {
      goToMarket = true;
}