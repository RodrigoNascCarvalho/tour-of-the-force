import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForceUsersComponent } from './force-users/force-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForceUserDetailComponent } from './force-user-detail/force-user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'forceUsers', component: ForceUsersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:id', component: ForceUserDetailComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
