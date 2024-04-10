import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppRoutingModule } from './app.routes';
import { Prod } from './prod';
import { MainPageComponent } from './main-page/main-page.component';
NgModule({
  exports: [ ],
  imports: [ MainPageComponent],
})
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class HeroService {

  private productsUrl = 'api/main';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getHeroes (): Observable<Prod[]> {
    return this.http.get<Prod[]>(this.productsUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Prod[]>('getHeroes', []))
      );
  }




  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}  log(arg0: string) {
    throw new Error('Method not implemented.');
  }

}
