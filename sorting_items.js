// A program creates another array on the basis of one books array

var books = ['Улисс', 'Маугли', 'Сияние', 'Ревизор', 'Гамлет', 'Обломов', 'Дюймовочка', 'Шантарам', 'Вий', 'Сильмариллион', 'Оно'];
var minNumber = 3;
var maxNumber = 5;
var filteredBooks = [];

for (var i = 0; i < books.length; i++) {
  if (books[i].length >= minNumber && books[i].length <=maxNumber) {
    console.log(books[i]);
    filteredBooks.push(books[i]);
  }
}
console.log(filteredBooks);
