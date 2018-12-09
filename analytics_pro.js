// A program monitors sports performance and analyzes the training performance.

var indicators = ['power', 'strength', 'stamina', 'speed', 'agility'];
var levels = [8, 15, 9, 12, 11];
var trainingTime = 30;

if (trainingTime <= 30) {
    levels[indicators.indexOf('agility')] = levels[indicators.indexOf('agility')] + 3;
    levels[indicators.indexOf('speed')] = levels[indicators.indexOf('speed')] + 3;   
}

if (trainingTime > 30 && trainingTime <= 60) {
    levels[indicators.indexOf('strength')] = levels[indicators.indexOf('strength')] + 3;
}

if (trainingTime > 60) {
    levels[indicators.indexOf('power')] = levels[indicators.indexOf('power')] + 2;
    levels[indicators.indexOf('stamina')] = levels[indicators.indexOf('stamina')] + 2;   
}



