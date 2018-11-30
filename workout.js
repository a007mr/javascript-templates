var age = 5;
var pulseAtRest = 90;
var intensity = 75;

var pulseAtWorkout;

pulseAtWorkout = ((220 - age) - pulseAtRest) * intensity / 100 + pulseAtRest; 
pulseAtWorkout = Math.round(pulseAtWorkout);
