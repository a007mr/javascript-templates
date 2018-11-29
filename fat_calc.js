var length = 0.55;
var weight = 5;
var fatMass = 0.8;

var bodyMassIndex = weight / (length * length);
bodyMassIndex = Math.round(bodyMassIndex);

var fatPercent = (fatMass / weight) * 100;
fatPercent = Math.round(fatPercent);