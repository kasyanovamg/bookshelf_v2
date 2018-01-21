$(document).ready(function(){

var table = $("table");
//"editing" keeps track of when EDIT button is clicked
var editing = false;
var newBook, book_name, author_name, publish_year, pic_url, new_name, new_author, new_year, new_link;

//creating book object
function Book(name, author, year, link) {
	this.name = name;
	this.author = author;
	this.year = year;
	this.link = link;
    }

Book.prototype.add = function() {
	return "<tr><td><img class=\"image\" src=\""+ this.link +"\"/></td><td><div class=\"title\">" + this.name + "</div><div class=\"book_author\">" + this.author + "</div><div><span class=\"book_year\">" + this.year + "</span><span class=\"year_format\"> г.</span></div></td><td><p><button id=\"edit\">Редактировать</button></p><p><button id=\"del\">Удалить</button></p></td></tr>";
} 

Book.prototype.saveEdit = function() {	
		new_name.text($("#book_name").val());
		new_author.text($("#author_name").val());
		new_year.text($("#published").val());
		new_link.attr("src", ($("#pic").val()));	
}


//on submit creates newBook object, either adds book to table or updates the info
$("form").on("submit", function(e){	
	e.preventDefault();
	if (editing) {

		book_name = new_name.text();
		author_name = new_author.text();
		publish_year = new_year.text();
		pic_url = new_link.text();
		newBook = new Book(book_name, author_name, publish_year, pic_url);	
		
		newBook.saveEdit();
		editing = false;
	} else {

	book_name = $("#book_name").val();
	author_name  = $("#author_name").val();
	publish_year = $("#published").val();
	pic_url = $("#pic").val();
	newBook = new Book(book_name, author_name, publish_year, pic_url);
		
	table.prepend(newBook.add());
	clear();
	}

open_book_edit.hide(300);

});	








});