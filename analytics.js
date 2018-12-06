// A program finds and collects statistics from user data.

var usersData = ['Виталий Иванович', 'Иннокентий Петрович', 'Александр Александрович', 'Игорь Олегович', 'Евгений Петрович', 'Игнат Денисович', 'Сергей Александрович', 'Семён Петрович'];
var query = 'Александрович';
var matchingUsers = 0;

for (var i = 0; i < usersData.length; i++) {
  usersData[i].indexOf(query)
  if (usersData[i].indexOf(query) >= 0) {
    matchingUsers ++;
  }
}


