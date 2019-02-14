class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;
  
    list.appendChild(row);
  }

  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Local Storage Class      // создаем класс для сохранения в ЛС
class Store {
  static getBooks() {     // создаем методы для получения книг из ЛС (все статичные)
    let books;
    if(localStorage.getItem('books') === null) {      //  пусто, то записываем пустой массив в переменную
      books = [];
    } else {      // если не пусто
      books = JSON.parse(localStorage.getItem('books'));    // преобразуя в JSON, используем ЛС books
    }

    return books;   // возвращаем массив
  }

  static displayBooks() {       // метод отображения книг
    const books = Store.getBooks();     // забирем массив из метода Получения

    books.forEach(function(book){   // создаем цикл с перебором каждого элемента
      const ui = new UI;    // вызываем (инициализируем) класс ЮИ

      // Add book to UI
      ui.addBookToList(book);     // делаем вызов нашего ЮИ метода, куда передаем каждую книгу из цикла
    });
  }

  static addBook(book) {      // метод добавления в ЛС
    const books = Store.getBooks();   // создаем переменую и записываем в нее значение из метода Получить книгу. Обращение напрямую, тк метод статичный. 

    books.push(book);     // добавляем в массив книгу (из параметра)

    localStorage.setItem('books', JSON.stringify(books));   // записываем в ЛС новое значение массива, преобразуя в  JSON
  }

  static removeBook(isbn) {       // метод удаления книг из ЛС - параметр isbn
    const books = Store.getBooks();     // также берем книги из ЛС

    books.forEach(function(book, index){    // запускаем цикл по каждой книге 
     if(book.isbn === isbn) {     // если isbn текущего элемента в цикле равен переданному в параметре isbn, то
      books.splice(index, 1);   // удаляем этот элемент с позиции 1 (не понимаю, почему с позиции 1!)
     }
    });

    localStorage.setItem('books', JSON.stringify(books));   // сохраняем ЛС еще раз
  }
}

// DOM Load Event   // делаем обработчик событий
document.addEventListener('DOMContentLoaded', Store.displayBooks);  // когда ДОМ загружен, вызываем ЛС класс Отображение метод

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  console.log(ui);

  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Add to LS        // добавили вызов метода 
    Store.addBook(book);      // тк он статичный, то не указываем ui

    // Show success
    ui.showAlert('Book Added!', 'success');
  
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Remove from LS   // удаляем из ЛС // здесь наш метод отличается от Ту Ду проекта, где мы передавали цель клика (стк 149) в метод прототипа и удаляли родителя родителя (стр 47). Здесь он хочет забрать уникальный номер isbn, по которому он сможет выделять элемент и удалять. 
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);  // вызываем метод из класса и выбираем контент в предыдущем родителе. То есть клик будет по Х (это <a>). Его родитель - это колонка td. Но нам нужна предыдущая колонка, где хранится isbn, поэтому используем previousElementSibling. И в ней нам надо забрать сам контент (textContent).

  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});


// АЛГОРИТМ
// 1. Создаем новый класс для ЛС
// - делаем там заготовки для 4 методов: Получить, Отобразить, Добавить, Удалить
// 2. Делаем метод получить из лс
// - создаем переменную
// - если в ЛС пусто, то записываем в переменную пустой массив
// - если нет, то преобразуем его в JSON
// - возвращаем массив
// 3. Создаем метод добавления книги
// - делаем переменную и записываем в нее массив из Получить книги
// - добавляем в этот массив книгу
// - сохраняем в ЛС этот массив
// 4. Создаем обработчик при загрузки ДОМА и вызываем отображение из ЛС 
// 5. В обработчик добавления книги делаем вызов метода для ЛС
// 6. Делаем метод Отобажения книги
// - в переменную записываем массив из Получить книги
// - делаем цикл с перебором каждого элемента
// - вызываем класс UI
// - передаем в метод Добавить книгу этого класса книгу
// 7. Метод Удалить книгу
// - в обработчике удаления передаем в Метод isbn
// - в самом методе забираем получаем книги из Получить метода
// - создаем цикл для каждой книги
// - если номера isbn переданного из обработчика и в цикле совпадают, то удаляем эту книгу
// - сохраняем массив в ЛС

