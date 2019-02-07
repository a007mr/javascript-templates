// Identifying Documents Numbers

var getDocumentsNumbers = function (title, year) {
  var total = 0;
  
  for (var i = 0; i < title.length; i++) {
  if (title[i].indexOf(year, 4) >= 0) {
    total ++;
  }
  }
  return total;
};