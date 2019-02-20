// Book Constructor 
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
} 

// UI Constructor
function UI() {}

// Add to Book List
UI.prototype.addBookToList = function(book) {
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

// Show Allert
UI.prototype.showAllert = function(message, className) {
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

// Delete Book
UI.prototype.deleteBook = function(target) {
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

//Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

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

  ui.deleteBook(e.target);

  // Show message
  ui.showAllert('Book Removed!', 'success');

  e.preventDefault();
})