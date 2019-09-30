import { Component, OnInit } from '@angular/core';
import { ForceUser } from '../force-user';
import { ForceUserService } from '../force-user.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  forceUsers: ForceUser[] = [];

  constructor(private forceUserService: ForceUserService) { }

  ngOnInit() {
    this.getForceUsers();
  }

  getForceUsers(): void {
    this.forceUserService
      .getForceUsers()
      .pipe(take(20))
      .subscribe(
        forceUser => this.forceUsers.push(forceUser)
      );
  }
}
