import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { BookService } from './book.service';
import { Book } from './Book';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-book',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
   getHeroSubscribe = new Subscription();
   booksById$!: Observable<Book[]>;
   booksByCategory$!: Observable<Book[]>;
   writersByCity$!: Observable<any[]>;

   constructor(private bookService: BookService) { }

   ngOnInit() {
   //  this.getBooks();
    //   this.addBook();
    //   this.searchBookByCategory('Spring');
    //   this.searchWriterByCity("Mumbai");
   }
   getBooks(): void {
    this.getHeroSubscribe = this.bookService.getBooks().subscribe((booksById) => {
      console.log(booksById);
      this.booksById$ = of(booksById);
    });
//    addBook() {
//       const book: Book = { id: 13, name: 'Spring Data by Neeraj', category: 'Spring' };
//       const data = this.bookService.saveBook(book);
//       console.log(data);
//    }
//    searchBookByCategory(category: string) {
//       this.booksByCategory$ = this.bookService.findBookByCategory(category);
//    }
//    searchWriterByCity(city: string) {
//       this.writersByCity$ = this.bookService.findWriterByCity(city);
//    }
} }