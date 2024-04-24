import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  newAuthor: string = "";
  newTitle: string = "";
  books: Book[] = [];

  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books");
    if(savedBooks){
      this.books = JSON.parse(savedBooks);
    }
  }

  addBook() {
    if (this.newAuthor && this.newTitle) {
      let newBook: Book = {
        id: this.books.length + 1,
        title: this.newTitle,
        author: this.newAuthor
      }
      this.books.push(newBook);
      localStorage.setItem("books", JSON.stringify(this.books));
      this.newAuthor = "";
      this.newTitle = "";
    }
  }

  deleteBook(index : number) : void {
    if(index < this.books.length && index >= 0){
      this.books.splice(index, 1);
      localStorage.setItem("books", JSON.stringify(this.books));
    }
  }
}
