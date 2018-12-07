import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { TimetabledataService } from './timetabledata.service';
import { TimetableComponent } from './timetable/timetable.component';

const routes: Routes = [
{ path: 'profile', component: ProfileComponent },
{ path: '', component: LoginComponentComponent },
{ path: 'admin', component: AdminPortalComponent },
{ path: 'admin/timetable/:userid', component: TimetableComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
