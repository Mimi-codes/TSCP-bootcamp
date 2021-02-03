'use strict'

var books = [
     {title : 'A Temporary Gift', author : 'Asmaa Hussein', alreadyRead : true },
    {title : 'Bloodline', author : 'Sydney Sheldon', alreadyRead : false },
    {title : 'The Bride of Satan', author : 'Abu Mazeedatil Khair', alreadyRead : true } 
]; //declares an array of books

var arrayLength = books.length;
for(var i = 0; i < books.length; i++) {
console.log(books[i].title + ' by ' + books[i].author); //logs book title with author
 
 if(books[i].alreadyRead === true ) {
console.log('You already read ' + books[i].title + '"');
 }else{
    console.log('You still need to read ' + books[i].title + '"');
 }
} //checks for alreadyRead books and otherwise 



