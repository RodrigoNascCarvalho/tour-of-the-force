import { Component, OnInit } from '@angular/core';
import { ForceUser } from '../force-user';
import { ForceUserService } from '../force-user.service';

@Component({
  selector: 'app-force-users',
  templateUrl: './force-users.component.html',
  styleUrls: ['./force-users.component.css']
})
export class ForceUsersComponent implements OnInit {
  forceUsers: ForceUser[];
  selectedForceUser: ForceUser;

  constructor(private forceUserService: ForceUserService) { }

  ngOnInit() {
    this.getForceUsers();
  }

  getForceUsers() {
    this.forceUserService
      .getForceUsers()
      .subscribe(
        forceUsers => this.forceUsers = forceUsers.results
      );
  }
}
