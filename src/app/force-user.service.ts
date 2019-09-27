import { Injectable } from '@angular/core';
import { ForceUser, ForceUserResult } from './force-user';
import { FORCE_USERS } from './mock-users';

import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

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

  getForceUsers(): Observable<ForceUserResult> {
    this.log('fetched force users...');
    return this.http.get<ForceUserResult>(this.forceUsersUrl)
      .pipe(
        catchError(this.handleError<ForceUserResult>('getForceUsers', { results: [] }))
      );
  }

  getForceUser(id: number) {
    this.log(`fetched force user with id -> ${id}`);
    return of(FORCE_USERS.find(forceUser => forceUser.id === id));
  }
}
