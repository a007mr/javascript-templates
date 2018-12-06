// A program for calculation the utility and performance of players based on their statistics

var firstPlayer = {
  name: 'Messi',
  goals: 0,
  passes: 0
}

var secondPlayer = {
  name: 'Zidan',
  goals: 0,
  passes: 0
}

var thirdPlayer = {
  name: 'Ronaldo',
  goals: 0,
  passes: 0
}

var soccerPlayers = [firstPlayer, secondPlayer, thirdPlayer];
var sumGoals = 0;


var getStatistics = function (players) {
  for (var i = 0; i < players.length; i++) {
     var coefficient = players[i].goals * 2 + players[i].passes;
     players[i] ['coefficient'] = coefficient;
     
     sumGoals += players[i].goals;
     console.log('sumGoals ' + sumGoals);
  }
  
  for (var i = 0; i < players.length; i++) {
     var percent = (players[i].goals / sumGoals) * 100;
     percent = Math.round(percent);
     console.log('percent ' + percent);
     players[i] ['percent'] = percent;
  }
  
  return players;
 
  
};

soccerPlayers = getStatistics(soccerPlayers);
console.log(soccerPlayers);