import { Injectable } from '@angular/core';
import { ForceUser } from './force-user';
import { FORCE_USERS } from './mock-users';

import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForceUserService {

  constructor(private messageService: MessageService) { }

  getForceUsers(): Observable<ForceUser[]> {
    this.messageService.add('ForceUserService: fetched force users...');
    return of(FORCE_USERS);
  }

  getForceUser(id: number) {
    this.messageService.add(`Hero Service: fetched force user with id: ${id}`);
    return of(FORCE_USERS.find(forceUser => forceUser.id === id));
  }
}
