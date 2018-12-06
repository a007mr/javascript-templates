// A program creates another array based on one luggage array

var luggage = ['пакет', 'мяч', 'тапки', 'когтеточка', 'коробка', 'миска', 'мята'];
var startIndex = 2;
var quantity = 3;
var chosenLuggage = [];


for (var i = startIndex; i < startIndex + quantity; i++) {

  chosenLuggage.push(luggage[i]);
}

