import { Injectable } from '@angular/core';
import { ForceUser, ForceUserResult } from './force-user';

import { MessageService } from './message.service';
import { Observable, of, EMPTY } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { catchError, tap, map, expand, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForceUserService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) {}

  private forceUsersUrl = 'https://swapi.co/api/people/';

  private log(message: string): void {
    this.messageService.add(`ForceUserService: ${message}`);
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



  fetchForceUsersPage(pageUrl: string = `${this.forceUsersUrl}?page=1`): Observable<ForceUserResult> {
    return this.http.get<ForceUserResult>(pageUrl)
      .pipe(
        tap(() => this.log(`fetched page ${pageUrl}`)),
        map(response => ({
          results: response.results.map(forceUser => ({
            ...forceUser,
            id: +forceUser.url.match(/https:\/\/swapi\.co\/api\/people\/(\d+)/)[1]
          })),
          next: response.next
        })),
        catchError(this.handleError<ForceUserResult>('getForceUsers', { results: [], next: null }))
      );
  }

  getForceUsers(): Observable<ForceUser> {
    return this.fetchForceUsersPage()
      .pipe(
        expand(({ next }) => next ? this.fetchForceUsersPage(next) : EMPTY),
        concatMap(({ results }) => results)
      );
  }

  getForceUser(id: number): Observable<ForceUser> {
    this.log(`fetched force user with id -> ${id}`);
    return this.http.get<ForceUser>(`${this.forceUsersUrl}${id}/`)
      .pipe(
        catchError(this.handleError<ForceUser>('getForceUser', null))
      );
  }
}
