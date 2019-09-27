import { Component, OnInit, Input } from '@angular/core';
import { ForceUser } from '../force-user';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ForceUserService } from '../force-user.service';

@Component({
  selector: 'app-force-user-detail',
  templateUrl: './force-user-detail.component.html',
  styleUrls: ['./force-user-detail.component.css']
})
export class ForceUserDetailComponent implements OnInit {
  @Input() forceUser: ForceUser;

  constructor(
    private route: ActivatedRoute,
    private forceUserService: ForceUserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getForceUser();
  }

  getForceUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.forceUserService
      .getForceUser(id)
      .subscribe(forceUser => this.forceUser = forceUser);
  }

  goBack(): void {
    this.location.back();
  }
}
