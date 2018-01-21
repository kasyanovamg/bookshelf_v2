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








});