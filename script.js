$(document).ready(function(){

var table = $("table");
var editing = false; //keeps track of when EDIT button is clicked
var newBook, id;
var number = 0;
var bookshelf = []; //stores all book objects here

//creating book object
function Book(name, author, year, link, index) {
	this.name = name;
	this.author = author;
	this.year = year;
	this.link = link;
	this.index = index;
    }

//adds new row
Book.prototype.add = function() {
	return `<tr id="row${this.index}">
	<td>
		<img class="image${this.index}" src="${this.link}"/>
	</td>
	<td>
		<div class="title${this.index}">${this.name}</div>
		<div class="book_author${this.index}">${this.author}</div>
		<div>
			<span class="book_year${this.index}">${this.year}</span>
			<span class="year_format"> г.</span>
		</div>
	</td>
	<td>
		<p><button class="edit">Редактировать</button></p>
		<p><button class="del">Удалить</button></p>
	</td>
	</tr>`;
} 

//on submit creates newBook object, either adds book to table or updates the info
$("form").on("submit", function(e){	
	e.preventDefault();
	if (editing) {
		bookshelf[id].name = $("#book_name").val();
		bookshelf[id].author =  $("#author_name").val();
		bookshelf[id].year = $("#published").val();
		bookshelf[id].link = $("#pic").val();
		bookshelf[id].index = id;
		saveEdit(id);
		editing = false;
	} else {
		var book_name = $("#book_name").val();
		var author_name  = $("#author_name").val();
		var publish_year = $("#published").val();
		var pic_url = $("#pic").val();

		number++ //updates the index
		newBook = new Book(book_name, author_name, publish_year, pic_url, number);
			
		table.prepend(newBook.add());
		clear();
		bookshelf.push(newBook);
	}
open_book_edit.hide(300);
});	

//listens to click on EDIT and stores info in temp variables
$("table").on('click', ".edit", function(){
	editing = true;
	open_book_edit.show(300);

	id = ($(this).closest("tr").attr('id')).match(/\d+/)[0];
	$("#book_name").val(bookshelf[id].name);
	$("#author_name").val(bookshelf[id].author);
	$("#published").val(bookshelf[id].year);
 	$("#pic").val(bookshelf[id].link);
});

//saves edited book
saveEdit = function(index) {	
	$(".title"+ index).text($("#book_name").val());
	$(".book_author"+ index).text($("#author_name").val());
	$(".book_year"+ index).text($("#published").val());
	$(".image"+ index).attr("src", ($("#pic").val()));	
}

//toggles add/edit form
var open_book_edit = $("#edition_field");
$("#add_book").click(function(){
    open_book_edit.toggle(300);
    clear();
});

//listens to event of cancel button
$("#cancel_book").click(function() {
	editing = false;
	clear();
	open_book_edit.hide(300);
});

//clears all inputs
function clear () {
	$("#book_name").val("");
	$("#author_name").val("");
	$("#published").val("");
	$("#pic").val("");
}

//listens to the event of clicking on DELETE, removes the row
$("table").on('click', ".del", function() {
	$(this).closest("tr").fadeOut(300, function(){
		$(this).remove();
	});	
	clear();
});

//demo book
newBook = new Book("JavaScript и Jquery", "Дэвид Сойер Макфарланд", "2017", "bookexample.jpg", number);
bookshelf.push(newBook);
table.prepend(newBook.add());
});