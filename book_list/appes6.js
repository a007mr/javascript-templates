// Book Class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class
class UI {
  addBookToList(book) {
    const bookList = document.getElementById('book-list');

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `;
  
    bookList.appendChild(tr);
  }

  showAllert(message, className) {
      // Create element
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    // Where to place
    const container = document.querySelector('.container'),
          form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    setTimeout(function() {
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

// Local Storage Class
class Store {
  static getBooks() {
    let books;

    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book) {
      // Instantiate UI
      const ui = new UI;

      // Store the book in LS
      ui.addBookToList(book);
    });
  }

  static addToStore(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeFromStore(isbn) {
    const books = Store.getBooks();

    books.forEach(function(book, index) {
      if(book.isbn === isbn) {
          books.splice(index, 1)
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event Listener for DOM
document.addEventListener('DOMContentLoaded', Store.displayBooks);


// Event listener for add book
document.getElementById('book-form').addEventListener('submit', function(e) { 
  const title = document.getElementById('title').value,
  author = document.getElementById('author').value,
  isbn = document.getElementById('isbn').value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI;

  // Validate
  if(title === '' || author === '' || isbn === '') {
    ui.showAllert('Please fill in all fields', 'error');
  } else {
    // Add book to List
    ui.addBookToList(book);

    // Add book to Local Storage
    Store.addToStore(book);

    // Show success
    ui.showAllert('Book Added!', 'success');

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
})


//Event listener for delete book
document.getElementById('book-list').addEventListener('click', function(e)  {
  // Instantiate UI
  const ui = new UI;

  // Delete book
  ui.deleteBook(e.target);

  // Remove from LS
  Store.removeFromStore(e.target.parentElement.previousElementSibling.textContent);

  // Show message
  ui.showAllert('Book Removed!', 'success');

  e.preventDefault();
})