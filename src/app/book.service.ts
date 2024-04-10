import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Book } from './Book';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    constructor(private http: HttpClient) { }
    getBooks (): Observable<Book[]> {
        return this.http.get<Book[]>("/api/books")
          .pipe(
            tap(_ => this.log('fetched heroes'))
          );
      }
    log(arg0: string): void {
        throw new Error('Method not implemented.');
    }
    // saveBook(book: Book): Observable<Book[]> {
    //     console.log(book);
    //     return this.http.post<Book[]>("/api/books", book);
    // }
    // findBookByCategory(category: string): Observable<Book[]> {
    //     const httpParams = new HttpParams().set('category', category);
    //     return this.http.get<Book[]>("/api/books", {
    //         params: httpParams
    //     });
    // }
    // findWriterByCity(city: string): Observable<Book[]> {
    //     const httpParams = new HttpParams().set('city', city);
    //     return this.http.get<any[]>("/api/writers", {
    //         params: httpParams
    //     });
    // }
} 