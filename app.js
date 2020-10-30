// Book Contructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI Contructor
function UI() {}
// Add book to list
UI.prototype.addBookToList = function (book) {
	const list = document.getElementById("book-list");
	// create tr element
	const row = document.createElement("tr");

	// insert cols
	row.innerHTML = `
	<td>${book.title}</td>
	<td>${book.author}</td>
	<td>${book.isbn}</td>
	<td><button class="delete">x</button></td>`;

	list.appendChild(row);
};

// Clear fields
UI.prototype.clearFields = function () {
	document.getElementById("title").value = "";
	document.getElementById("author").value = "";
	document.getElementById("isbn").value = "";
};

// Event Listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
	e.preventDefault();

	// get form values
	const title = document.getElementById("title").value,
		author = document.getElementById("author").value,
		isbn = document.getElementById("isbn").value;

	// instantiate book
	const book = new Book(title, author, isbn);

	// instantiate UI
	const ui = new UI();

	// add book to list
	ui.addBookToList(book);

	// clear fields
	ui.clearFields();
});
