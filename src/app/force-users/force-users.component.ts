import { Component, OnInit } from '@angular/core';
import { ForceUser } from '../force-user';
import { ForceUserService } from '../force-user.service';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-force-users',
  templateUrl: './force-users.component.html',
  styleUrls: ['./force-users.component.css']
})
export class ForceUsersComponent implements OnInit {
  forceUsers: ForceUser[] = [];
  selectedForceUser: ForceUser;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private forceUserService: ForceUserService) { }

  ngOnInit() {
    this.getForceUsers();
  }

  getForceUsers() {
    this.isLoading$.next(true);

    this.forceUserService
      .getForceUsers()
      .pipe(
        take(30)
      )
      .subscribe(
        forceUser => this.forceUsers.push(forceUser),
        error => console.log(error),
        () => this.isLoading$.next(false)
      );
  }

  hasMorePages(): boolean {
    return this.forceUserService.hasMorePages();
  }

  getMoreForceUsers() {
    this.isLoading$.next(true);

    this.forceUserService
      .getNextForceUsersPage()
      .pipe(
        take(10)
      )
      .subscribe(
        forceUser => this.forceUsers.push(forceUser),
        error => console.log(error),
        () => this.isLoading$.next(false)
      );
  }
}
